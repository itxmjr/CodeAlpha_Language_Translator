FROM python:3.13-slim

RUN apt-get update && apt-get install -y \
    curl \
    git \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

WORKDIR /app

RUN useradd -m -u 1000 user

COPY --chown=user:user . .

USER user

WORKDIR /app/backend
RUN uv sync

WORKDIR /app/frontend
RUN npm ci
RUN npm run build

EXPOSE 7860

ENV HOME=/home/user

WORKDIR /app
CMD ["bash", "start.sh"]
