#!/bin/bash

cd backend
echo "Starting Backend..."
uv run uvicorn src.api:app --host 127.0.0.1 --port 8000 &
BACKEND_PID=$!

sleep 5

cd ../frontend
echo "Starting Frontend..."
npm run start -- -p 7860
