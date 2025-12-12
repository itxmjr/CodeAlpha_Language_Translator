---
title: CodeAlpha Language Translator
emoji: 🌐
colorFrom: red
colorTo: red
sdk: streamlit
sdk_version: 1.51.0
app_file: main.py
pinned: false
license: mit
---

# 🌐 CodeAlpha Language Translator

![Python](https://img.shields.io/badge/Python-3.13+-blue.svg?style=for-the-badge&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-1.51+-FF4B4B.svg?style=for-the-badge&logo=Streamlit&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

A powerful, real-time language translation application built with Python and Streamlit. This app allows you to instantly translate text between over 20 global languages and features integrated Text-to-Speech (TTS) capabilities to listen to your translations.

## ✨ Features

- **Multi-Language Support**: Translate seamlessly between 20+ languages including English, Spanish, French, German, Chinese, Arabic, and more.
- **Real-Time Translation**: Powered by the Google Translate API for accurate and fast results.
- **Text-to-Speech (TTS)**: Listen to the translated text with a single click using Google Text-to-Speech integration.
- **User-Friendly Interface**: Clean and responsive UI built with Streamlit for an optimal user experience.
- **Cross-Platform**: Runs in your browser, making it accessible on any device.

## 🚀 Demo

*(Add a screenshot or GIF of your application here)*

## 🛠️ Tech Stack

- **[Python](https://www.python.org/)**: Core programming language.
- **[Streamlit](https://streamlit.io/)**: Framework for building the web interface.
- **[gTTS (Google Text-to-Speech)](https://pypi.org/project/gTTS/)**: Library for converting text to speech.
- **[Requests](https://pypi.org/project/requests/)**: For making API calls to Google Translate.

## 📦 Installation

Ensure you have Python 3.13 or higher installed.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/CodeAlpha_Language_Translator.git
    cd CodeAlpha_Language_Translator
    ```

2.  **Install Dependencies**
    It is recommended to use a virtual environment (like `venv` or `uv`).

    Using `pip`:
    ```bash
    pip install -r requirements.txt
    ```


    Using `uv` (if applicable):
    ```bash
    uv sync
    ```

## 🎮 Usage

1.  **Run the Application**
    Execute the following command in your terminal:
    ```bash
    streamlit run main.py
    ```

2.  **Translate Text**
    - Select your **Source Language** from the left dropdown.
    - Select your **Target Language** from the right dropdown.
    - Type or paste the text you want to translate in the text area.
    - Click the **Translate** button.

3.  **Listen to Audio**
    - Once the translation is complete, check the **Play Translated Audio** box to hear the pronunciation.

## 📂 Project Structure

```
CodeAlpha_Language_Translator/
├── main.py              # Entry point of the application
├── pyproject.toml       # Project configuration and dependencies
├── requirements.txt     # Python dependencies
├── README.md            # Project documentation
├── src/
│   ├── app.py           # Main Streamlit application logic
│   └── translator.py    # Translation and TTS utility functions
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

Space: https://huggingface.co/spaces/aibymjr/CodeAlpha_Language_Translator

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by M Jawad ur Rehman using Streamlit and Python.</sub>
</div>