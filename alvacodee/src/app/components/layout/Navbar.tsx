"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();
  const t = content[lang].nav;

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: t.about, href: "#about" },
    { name: t.projects, href: "#projects" },
    { name: t.experience, href: "#experience" },
    { name: t.writing, href: "#writing" },
    { name: t.journey, href: "#journey" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-400 ${
          scrolled
            ? "border-b bg-base/90 backdrop-blur-xl py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
        style={{ borderColor: scrolled ? "var(--border)" : "transparent" }}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#about"
            className="font-mono text-sm font-medium transition-colors"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            <span style={{ color: "var(--text-subtle)" }}>~/</span>
            <span style={{ color: "var(--text)" }}>alvacodee</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="px-3 py-1.5 text-sm rounded-md transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.name}
              </a>
            ))}

            {/* Divider */}
            <div className="mx-2 h-4 w-px" style={{ background: "var(--border)" }} />

            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "id" : "en")}
              className="px-3 py-1.5 text-xs font-medium rounded-md border transition-all"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                borderColor: "var(--border)",
                background: "transparent",
              }}
            >
              {lang === "en" ? "ID" : "EN"}
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md transition-colors"
                style={{ color: "var(--text-muted)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            {/* Resume CTA */}
            <a
              href="/Resume_Zahran-Alvan-Putra-Winarko.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-4 py-1.5 text-sm font-medium rounded-md border transition-all"
              style={{
                color: "var(--text)",
                borderColor: "color-mix(in srgb, var(--accent) 40%, transparent)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-soft)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {t.resume}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md"
                style={{ color: "var(--text-muted)" }}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md"
              style={{ color: "var(--text-muted)" }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col"
          style={{ background: "var(--bg)" }}
        >
          <div className="flex flex-col items-center justify-center flex-1 gap-2 p-8">
            {links.map((l, i) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl py-2 transition-colors"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--text-muted)",
                  animationDelay: `${i * 40}ms`,
                }}
              >
                {l.name}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setLang(lang === "en" ? "id" : "en")}
                className="px-4 py-2 text-sm rounded-md border"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", borderColor: "var(--border)" }}
              >
                {lang === "en" ? "Switch to ID" : "Switch to EN"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
