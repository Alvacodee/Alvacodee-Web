"use client";
import { FileText, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;

  const socialLinks = [
    { href: "https://github.com/Alvacodee", icon: <Github size={15} />, label: "GitHub" },
    { href: "https://linkedin.com/in/zahran-alvan-putra-winarko", icon: <Linkedin size={15} />, label: "LinkedIn" },
    { href: "mailto:zahranalvan2901@gmail.com", icon: <Mail size={15} />, label: "Email" },
    { href: "https://www.instagram.com/zahran_alvan/", icon: <Instagram size={15} />, label: "Instagram" },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 pt-32 pb-24">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-16 left-1/3 h-80 w-80 rounded-full blur-[120px] opacity-20" style={{ background: "var(--accent)" }} />
        <div className="absolute top-40 right-1/4 h-52 w-52 rounded-full blur-[90px] opacity-10" style={{ background: "var(--orange)" }} />
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-2 mb-6 animate-fade-up">
        <span className="h-2 w-2 rounded-full pulse-dot" style={{ background: "var(--green)", boxShadow: "0 0 6px var(--green)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          {t.status}
        </span>
      </div>

      {/* Name */}
      <h1
        className="text-6xl md:text-7xl leading-tight mb-4 animate-fade-up anim-d1"
        style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
      >
        {t.name}
      </h1>

      {/* Role tags — simple, no description */}
      <div className="flex flex-wrap items-center gap-2 mb-10 animate-fade-up anim-d2">
        {t.roleTags.map((tag: string, i: number) => (
          <span key={tag} className="flex items-center gap-2">
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>{tag}</span>
            {i < t.roleTags.length - 1 && (
              <span className="text-xs" style={{ color: "var(--text-subtle)" }}>·</span>
            )}
          </span>
        ))}
      </div>

      {/* CTA row: Download CV + social icon buttons */}
      <div className="flex flex-wrap items-center gap-3 animate-fade-up anim-d3">
        {/* Download CV */}
        <a
          href="/Resume_Zahran-Alvan-Putra-Winarko.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            boxShadow: "0 0 20px color-mix(in srgb, var(--accent) 25%, transparent)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
        >
          <FileText size={14} />
          {t.downloadCV}
        </a>

        {/* Social icon buttons */}
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: "var(--text-muted)", borderColor: "var(--border)", background: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            {s.icon}
            <span className="hidden sm:inline">{s.label}</span>
          </a>
        ))}
      </div>

      {/* Stats */}
      <div
        className="flex flex-wrap gap-10 mt-12 pt-8 border-t animate-fade-up anim-d4"
        style={{ borderColor: "var(--border)" }}
      >
        {t.stats.map((s: { value: string; label: string }) => (
          <div key={s.label}>
            <p className="text-2xl font-semibold" style={{ color: "var(--text)" }}>{s.value}</p>
            <p className="text-xs uppercase tracking-widest mt-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
