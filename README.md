---
title: Language Translator
emoji: 🌐
colorFrom: red
colorTo: red
sdk: docker
app_port: 7860
pinned: false
license: mit
---

# 🌐 Language Translator

![Python](https://img.shields.io/badge/Python-3.13+-blue.svg?style=for-the-badge&logo=python&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16+-black.svg?style=for-the-badge&logo=next.js&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.127+-009688.svg?style=for-the-badge&logo=fastapi&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

A powerful, real-time language translation application built with **Python (FastAPI)** and **Next.js**. This app allows you to instantly translate text between over 30 global languages and features integrated Text-to-Speech (TTS) capabilities to listen to your translations in a modern, responsive interface.

## ✨ Features

- **Multi-Language Support**: Translate seamlessly between 30+ languages including English, Spanish, French, German, Chinese, Arabic, and more.
- **Real-Time Translation**: Powered by the Google Translate API for accurate and fast results.
- **Text-to-Speech (TTS)**: Listen to the translated text with a single click using Google Text-to-Speech (gTTS) integration.
- **Premium UI/UX**: Clean, responsive, and modern interface built with **Next.js**, **Tailwind CSS 4**, and **Radix UI** components.
- **Fast & Lightweight**: Backend powered by **FastAPI** for high performance and minimal latency.
- **Cross-Platform**: Fully responsive design that works perfectly on desktops, tablets, and smartphones.

## 🚀 Demo

<p align="center">
  <img src="./assets/demo.gif" alt="Language Translator Demo" width="800" />
</p>

## 🛠️ Tech Stack

- **[Python](https://www.python.org/)**: Core programming language.
- **[FastAPI](https://fastapi.tiangolo.com/)**: Modern, high-performance web framework for the backend.
- **[Next.js](https://nextjs.org/)**: React framework for building the modern web interface.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework for premium styling.
- **[Radix UI](https://www.radix-ui.com/)**: Low-level UI component library for accessible and high-quality components.
- **[gTTS (Google Text-to-Speech)](https://pypi.org/project/gTTS/)**: Library for converting text to speech.
- **[Requests](https://pypi.org/project/requests/)**: For making API calls to Google Translate.

## 📦 Installation

Ensure you have Python 3.13 or higher and Node.js installed.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/itxmjr/Language-Translator.git
    cd Language-Translator
    ```

2.  **Backend Setup**
    Navigate to the `backend` directory:
    ```bash
    cd backend
    uv sync
    uv run uvicorn src.api:app --reload
    ```

3.  **Frontend Setup**
    Navigate to the `frontend` directory:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## 🎮 Usage

1.  **Run the Application**
    Ensure both backend and frontend servers are running.
    Access the application at `http://localhost:3000`.

2.  **Translate Text**
    - Select your **Source Language** from the left dropdown.
    - Select your **Target Language** from the right dropdown.
    - Type or paste the text you want to translate in the text area.
    - Click the **Translate** button.

3.  **Listen to Audio**
    - Once the translation is complete, check the **Play Translated Audio** box to hear the pronunciation.

## 📂 Project Structure

```
Language-Translator/
├── backend/             # Python FastAPI Backend
│   ├── src/
│   │   ├── api.py       # API endpoints
│   │   └── translator.py # Translation logic
│   ├── pyproject.toml   # Python dependencies
│   └── ...
├── frontend/            # Next.js Frontend
│   ├── src/             # Frontend source code
│   ├── package.json     # Node dependencies
│   └── ...
├── Dockerfile           # Deployment configuration
├── README.md            # Project documentation
└── ...
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 🌍 Deployment

This application is deployed on Hugging Face Spaces.

Space: https://huggingface.co/spaces/itxmjr/Language-Translator

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by M Jawad ur Rehman using Next.js and Python.</sub>
</div>