"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, User, Bot } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Zahran's AI Assistant. Ask me anything about his projects or skills! 🤖" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll ke bawah kalau ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, I'm having trouble connecting to the brain right now. 😓" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 1. TOMBOL BUNDAR MELAYANG (Floating Action Button) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-red-500 rotate-90" : "bg-blue-600 hover:bg-blue-500"
        }`}
      >
        {isOpen ? <X className="text-white" /> : <MessageCircle className="text-white" />}
      </button>

      {/* 2. JENDELA CHAT (Muncul jika isOpen = true) */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-2xl border border-gray-800 bg-gray-950/95 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden animate-in slide-in-from-bottom-5 duration-300 flex flex-col max-h-[500px]">
          
          {/* Header */}
          <div className="bg-gray-900 p-4 border-b border-gray-800 flex items-center gap-3">
            <div className="relative">
                <div className="h-2 w-2 absolute bottom-0 right-0 bg-green-500 rounded-full border border-gray-900"></div>
                <Bot className="text-blue-400" />
            </div>
            <div>
                <h3 className="font-bold text-white text-sm">Alvacodee's AI</h3>
                <p className="text-xs text-gray-400">Powered by Gemini</p>
            </div>
          </div>

          {/* Body (List Pesan) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-blue-600" : "bg-gray-800"}`}>
                    {msg.role === "user" ? <User size={14} className="text-white"/> : <Bot size={14} className="text-blue-400"/>}
                </div>
                <div className={`rounded-2xl p-3 text-sm max-w-[80%] ${
                  msg.role === "user" 
                    ? "bg-blue-600 text-white rounded-tr-none" 
                    : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-blue-400"/>
                </div>
                <div className="bg-gray-800 rounded-2xl rounded-tl-none p-3 border border-gray-700">
                    <Loader2 className="animate-spin text-gray-400" size={16} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer (Input) */}
          <div className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about Zahran..."
              className="flex-1 bg-gray-950 border border-gray-700 text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500 transition"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}