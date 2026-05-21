"use client";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { MediumIcon, KaggleIcon, HuggingFaceIcon } from "@/lib/social-icons";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang].footer;

  const socials = [
    { href: "https://github.com/Alvacodee", icon: <Github size={16} />, label: "GitHub" },
    { href: "https://linkedin.com/in/zahran-alvan-putra-winarko", icon: <Linkedin size={16} />, label: "LinkedIn" },
    { href: "mailto:zahranalvan2901@gmail.com", icon: <Mail size={16} />, label: "Email" },
    { href: "https://www.instagram.com/zahran_alvan/", icon: <Instagram size={16} />, label: "Instagram" },
    { href: "https://medium.com/@zahranalvan2901", icon: <MediumIcon size={16} />, label: "Medium" },
    { href: "https://www.kaggle.com/zahranalvan", icon: <KaggleIcon size={16} />, label: "Kaggle" },
    { href: "https://huggingface.co/Alvacodee", icon: <HuggingFaceIcon size={16} />, label: "HuggingFace" },
  ];

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-5 px-6">
        {/* Social icons row */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-colors"
              style={{ color: "var(--text-subtle)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-subtle)")}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright — centered */}
        <p
          className="text-xs text-center"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} {t.copy}
        </p>
      </div>
    </footer>
  );
}
