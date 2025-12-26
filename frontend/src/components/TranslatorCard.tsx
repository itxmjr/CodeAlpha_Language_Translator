"use client";

import { useState, useCallback } from "react";
import { ArrowRightLeft, Copy, Check, Volume2, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { getLanguageByCode } from "@/data/languages";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const TranslatorCard = () => {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwapLanguages = useCallback(() => {
    setIsSwapping(true);
    setTimeout(() => {
      setSourceLang(targetLang);
      setTargetLang(sourceLang);
      setSourceText(translatedText);
      setTranslatedText(sourceText);
      setIsSwapping(false);
    }, 150);
  }, [sourceLang, targetLang, sourceText, translatedText]);

  const handleTranslate = useCallback(async () => {
    if (!sourceText.trim()) {
      toast.error("Please enter text to translate");
      return;
    }

    setIsTranslating(true);

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: sourceText,
          source_lang: sourceLang,
          target_lang: targetLang,
        }),
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setTranslatedText(data.translated_text);
      toast.success("Translation complete!");
    } catch (error) {
      console.error(error);
      toast.error("Translation failed. Please try again.");
    } finally {
      setIsTranslating(false);
    }
  }, [sourceText, sourceLang, targetLang]);

  const handleSpeak = useCallback(async () => {
    if (!translatedText || isSpeaking) return;

    // Use Web Speech API as fallback or if configured to prefer it
    try {
      setIsSpeaking(true);
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: translatedText, lang: targetLang })
      });

      if (!response.ok) throw new Error("TTS failed");

      const data = await response.json();
      const audio = new Audio(`data:audio/mp3;base64,${data.audio_base64}`);
      audio.onended = () => setIsSpeaking(false);
      audio.play();
    } catch (e) {
      // Fallback to browser API
      console.warn("Backend TTS failed, falling back to browser API", e);
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = targetLang;
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  }, [translatedText, targetLang, isSpeaking]);

  const handleCopy = useCallback(async () => {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(translatedText);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  }, [translatedText]);

  const handleClear = useCallback(() => {
    setSourceText("");
    setTranslatedText("");
  }, []);

  const sourceLanguage = getLanguageByCode(sourceLang);
  const targetLanguage = getLanguageByCode(targetLang);

  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in">
      <div className="flex items-end gap-4 mb-6">
        <div className="flex-1">
          <LanguageSelector
            value={sourceLang}
            onChange={setSourceLang}
            label="From"
          />
        </div>

        <Button
          variant="icon"
          size="icon"
          onClick={handleSwapLanguages}
          className={cn(
            "mb-0.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary",
            isSwapping && "animate-swap"
          )}
        >
          <ArrowRightLeft className="w-5 h-5" />
        </Button>

        <div className="flex-1">
          <LanguageSelector
            value={targetLang}
            onChange={setTargetLang}
            label="To"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass-card rounded-2xl p-4 shadow-soft transition-shadow duration-300 hover:shadow-hover">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{sourceLanguage?.flag}</span>
              <span className="font-medium text-foreground">{sourceLanguage?.name}</span>
            </div>
            {sourceText && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="text-muted-foreground hover:text-destructive h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            className="w-full h-40 bg-transparent resize-none focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-lg"
          />

          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            <span className="text-xs text-muted-foreground">
              {sourceText.length} characters
            </span>
            <Button
              variant="gradient"
              size="lg"
              onClick={handleTranslate}
              disabled={isTranslating || !sourceText.trim()}
              className="min-w-[140px]"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Translating
                </>
              ) : (
                "Translate"
              )}
            </Button>
          </div>
        </div>

        <div className="gradient-border rounded-2xl p-4 shadow-soft transition-shadow duration-300 hover:shadow-hover">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{targetLanguage?.flag}</span>
              <span className="font-medium text-foreground">{targetLanguage?.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="icon"
                size="icon"
                onClick={handleSpeak}
                disabled={!translatedText || isSpeaking}
                className="h-8 w-8"
              >
                <Volume2 className={cn(
                  "w-4 h-4",
                  isSpeaking && "animate-pulse-soft text-primary"
                )} />
              </Button>
              <Button
                variant="icon"
                size="icon"
                onClick={handleCopy}
                disabled={!translatedText}
                className="h-8 w-8"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-accent" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="w-full h-40 text-lg text-foreground overflow-y-auto">
            {translatedText || (
              <span className="text-muted-foreground/50">Translation will appear here...</span>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            <span className="text-xs text-muted-foreground">
              {translatedText.length} characters
            </span>
            {translatedText && (
              <span className="text-xs text-accent font-medium">
                ✓ Ready to copy or speak
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
