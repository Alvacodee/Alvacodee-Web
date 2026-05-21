"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, User } from "lucide-react";

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Zahran's AI Assistant. Ask me anything about his projects, skills, or background! ✨" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, I'm having trouble connecting right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{
          background: isOpen
            ? "#ef4444"
            : "var(--accent)",
          color: "var(--bg)",
          boxShadow: isOpen
            ? "0 0 20px rgba(239,68,68,0.4)"
            : "0 0 20px color-mix(in srgb, var(--accent) 40%, transparent)",
        }}
      >
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
          {isOpen ? <X size={18} /> : <SparkleIcon />}
        </div>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl w-80 md:w-[360px]"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            maxHeight: "520px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.3), 0 0 0 1px var(--border)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b shrink-0"
            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
          >
            <div
              className="relative flex h-8 w-8 items-center justify-center rounded-full shrink-0"
              style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
            >
              <SparkleIcon />
              <span
                className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2"
                style={{
                  background: "var(--green)",
                  borderColor: "var(--bg-subtle)",
                  boxShadow: "0 0 4px var(--green)",
                }}
              />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                Alvacodee&apos;s AI
              </p>
              <p className="text-xs" style={{ color: "var(--text-subtle)", fontFamily: "var(--font-mono)" }}>
                Powered by Gemini
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto p-1 rounded-lg transition-colors"
              style={{ color: "var(--text-subtle)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-subtle)")}
            >
              <X size={15} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ minHeight: "300px", maxHeight: "360px" }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 items-end ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div
                  className="h-7 w-7 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: msg.role === "user"
                      ? "var(--accent)"
                      : "color-mix(in srgb, var(--accent) 12%, var(--bg-subtle))",
                  }}
                >
                  {msg.role === "user"
                    ? <User size={12} color="var(--bg)" />
                    : <SparkleIcon />}
                </div>

                {/* Bubble */}
                <div
                  className="rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed max-w-[78%]"
                  style={
                    msg.role === "user"
                      ? {
                          background: "var(--accent)",
                          color: "var(--bg)",
                          borderBottomRightRadius: "4px",
                        }
                      : {
                          background: "var(--bg-subtle)",
                          color: "var(--text)",
                          border: "1px solid var(--border)",
                          borderBottomLeftRadius: "4px",
                        }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-end">
                <div
                  className="h-7 w-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "color-mix(in srgb, var(--accent) 12%, var(--bg-subtle))" }}
                >
                  <SparkleIcon />
                </div>
                <div
                  className="rounded-2xl px-4 py-3 border"
                  style={{
                    background: "var(--bg-subtle)",
                    borderColor: "var(--border)",
                    borderBottomLeftRadius: "4px",
                  }}
                >
                  <Loader2 size={14} className="animate-spin" style={{ color: "var(--text-muted)" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="p-3 border-t shrink-0 flex gap-2"
            style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about Zahran..."
              className="flex-1 text-sm rounded-xl px-4 py-2.5 outline-none transition-all"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "color-mix(in srgb, var(--accent) 60%, transparent)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="flex items-center justify-center h-10 w-10 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
              onMouseEnter={(e) => {
                if (!isLoading && input.trim())
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
