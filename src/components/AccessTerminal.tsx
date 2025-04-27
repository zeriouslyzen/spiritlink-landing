"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flickerVariants = {
  initial: { opacity: 0 },
  flicker: {
    opacity: [0, 1, 0.7, 1, 0.9, 1],
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  stable: { opacity: 1 },
};

export default function AccessTerminal() {
  const [input, setInput] = useState("");
  const [flicker, setFlicker] = useState(true);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => setFlicker(false), 1200);
    inputRef.current?.focus();
  }, []);

  // Voice input setup
  useEffect(() => {
    if (typeof window !== "undefined" && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setListening(false);
      };
      recognitionRef.current.onerror = () => setListening(false);
      recognitionRef.current.onend = () => setListening(false);
    }
  }, []);

  const handleMic = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  // Voice output (text-to-speech)
  useEffect(() => {
    if (response && !loading && typeof window !== "undefined" && 'speechSynthesis' in window) {
      const utter = new window.SpeechSynthesisUtterance(response);
      utter.rate = 1.05;
      utter.pitch = 0.7;
      utter.volume = 1;
      // Try to use a retro/robotic voice if available
      const voices = window.speechSynthesis.getVoices();
      const retroVoice = voices.find(v => v.name.toLowerCase().includes("fred") || v.name.toLowerCase().includes("zarvox") || v.name.toLowerCase().includes("trinoids") || v.name.toLowerCase().includes("robot"));
      if (retroVoice) utter.voice = retroVoice;
      window.speechSynthesis.cancel(); // Stop any current speech
      window.speechSynthesis.speak(utter);
    }
  }, [response, loading]);

  // Retro system prompts for each action
  const getSystemPrompt = (action: string) => {
    switch (action) {
      case "Decrypt Node":
        return "[RETRO-COMPUTER SYSTEM]\nYou are a vintage decryption terminal. Respond in terse, technical, old-school style.\n";
      case "Pulse Signal":
        return "[RETRO-COMPUTER SYSTEM]\nYou are a retro network diagnostic terminal. Respond with network jargon and 80s/90s computer lingo.\n";
      default:
        return "[RETRO-COMPUTER SYSTEM]\nYou are a classic computer terminal.\n";
    }
  };

  const handleAction = async (action: string) => {
    setLoading(true);
    setError(null);
    setResponse("");
    try {
      const systemPrompt = getSystemPrompt(action);
      const res = await fetch("/api/ollama", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `${systemPrompt}${input}` }),
      });
      if (!res.body) throw new Error("No response body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let fullText = "";
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        if (value) {
          const chunk = decoder.decode(value);
          fullText += chunk;
          setResponse(fullText);
        }
        done = doneReading;
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to connect to backend");
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center min-h-[260px]"
      variants={flickerVariants}
      initial="initial"
      animate={flicker ? "flicker" : "stable"}
    >
      <div className="bg-black flex flex-col items-center w-full max-w-xs sm:max-w-sm border-4 border-[#00ff00] rounded-md shadow-lg" style={{ fontFamily: '"VT323", monospace', boxShadow: '0 0 24px 2px #00ff00' }}>
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex items-center bg-black rounded-md border border-[#00ff00] px-3 py-2 mb-4 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="w-full bg-transparent outline-none border-none text-[#00ff00] font-mono text-base placeholder-[#00ff00]/60 pr-2"
              placeholder="Enter Command..."
              autoComplete="off"
              spellCheck={false}
            />
            <button
              onClick={handleMic}
              className={`ml-2 p-1 rounded-full border-2 ${listening ? 'border-red-500' : 'border-[#00ff00]'} bg-black text-[#00ff00] focus:outline-none`}
              title={listening ? "Stop Listening" : "Start Voice Input"}
              style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {listening ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22m6-6a6 6 0 0 1-12 0"/><rect x="9" y="9" width="6" height="6" rx="3"/></svg>
              )}
            </button>
            <span className="ml-[-2px] animate-blink text-[#00ff00] font-mono text-lg select-none">|</span>
          </div>
          <div className="flex w-full gap-3 mb-3">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 12px 2px #00fff7" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-black border border-[#00fff7] text-[#00fff7] font-mono px-4 py-2 rounded-none shadow-md transition-all text-base focus:outline-none focus:ring-2 focus:ring-[#00fff7]"
              style={{ boxShadow: "0 0 8px 1px #00fff7" }}
              onClick={() => handleAction("Decrypt Node")}
            >
              Decrypt Node
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 12px 2px #00fff7" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-black border border-[#00fff7] text-[#00fff7] font-mono px-4 py-2 rounded-none shadow-md transition-all text-base focus:outline-none focus:ring-2 focus:ring-[#00fff7]"
              style={{ boxShadow: "0 0 8px 1px #00fff7" }}
              onClick={() => handleAction("Pulse Signal")}
            >
              Pulse Signal
            </motion.button>
          </div>
        </div>
        <div className="text-xs text-[#00ff00]/80 font-mono text-center mt-2 select-none" style={{ textShadow: '0 0 4px #00ff00' }}>
          {loading && <span>Processing...</span>}
          {!loading && error && <span className="text-red-400">{error}</span>}
          {!loading && response && <span>{response}</span>}
          {!loading && !response && !error && <span>Awaiting input...</span>}
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink { animation: blink 1.1s steps(1) infinite; }
      `}</style>
    </motion.div>
  );
} 