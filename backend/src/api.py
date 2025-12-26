from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .translator import translate_text, text_to_speech
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranslationRequest(BaseModel):
    text: str
    source_lang: str
    target_lang: str

class TTSRequest(BaseModel):
    text: str
    lang: str

@app.post("/translate")
async def translate(request: TranslationRequest):
    try:
        translated = translate_text(request.text, request.source_lang, request.target_lang)
        if "Translation Error" in translated:
            raise HTTPException(status_code=500, detail=translated)
        return {"translated_text": translated}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/tts")
async def tts(request: TTSRequest):
    try:
        audio_bytes = text_to_speech(request.text, request.lang)
        audio_base64 = base64.b64encode(audio_bytes).decode("utf-8")
        return {"audio_base64": audio_base64}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health():
    return {"status": "ok"}
