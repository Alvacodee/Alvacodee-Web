"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Github, Linkedin, Mail, Send, Instagram } from "lucide-react";
import { MediumIcon, KaggleIcon, HuggingFaceIcon } from "@/lib/social-icons";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang].contact;
  const [state, handleSubmit] = useForm("maqyzpyg");

  const contactLinks = [
    { icon: <Mail size={14} />, label: t.email, value: "zahranalvan2901@gmail.com", href: "mailto:zahranalvan2901@gmail.com" },
    { icon: <Github size={14} />, label: t.github, value: "github.com/Alvacodee", href: "https://github.com/Alvacodee" },
    { icon: <Linkedin size={14} />, label: t.linkedin, value: "zahran-alvan-putra-winarko", href: "https://linkedin.com/in/zahran-alvan-putra-winarko" },
    { icon: <Instagram size={14} />, label: "Instagram", value: "@zahran_alvan", href: "https://www.instagram.com/zahran_alvan/" },
    { icon: <MediumIcon size={14} />, label: "Medium", value: "@zahranalvan2901", href: "https://medium.com/@zahranalvan2901" },
    { icon: <KaggleIcon size={14} />, label: "Kaggle", value: "zahranalvan", href: "https://www.kaggle.com/zahranalvan" },
    { icon: <HuggingFaceIcon size={14} />, label: "HuggingFace", value: "Alvacodee", href: "https://huggingface.co/Alvacodee" },
  ];

  if (state.succeeded) {
    return (
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mx-auto max-w-sm card p-10">
          <div className="text-3xl mb-4">✉️</div>
          <h2 className="text-2xl mb-2" style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}>
            {t.successTitle}
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t.successSub}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-5 text-xs underline underline-offset-2 transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            {t.another}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="space-y-6">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
            >
              {lang === "en" ? "— Get in touch" : "— Hubungi saya"}
            </p>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
            >
              {t.heading}
            </h2>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--text-muted)" }}>
              {t.sub}
            </p>
          </div>

          {/* Contact links */}
          <div className="space-y-3 pt-2">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm transition-colors"
              >
                <span style={{ color: "var(--text-subtle)" }}>{c.icon}</span>
                <span className="w-24 shrink-0 text-xs" style={{ color: "var(--text-subtle)" }}>
                  {c.label}
                </span>
                <span
                  className="transition-colors text-xs"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                >
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { id: "email", name: "email", type: "email", label: t.labelEmail, placeholder: t.placeholderEmail },
            { id: "subject", name: "subject", type: "text", label: t.labelSubject, placeholder: t.placeholderSubject },
          ].map((f) => (
            <div key={f.id}>
              <label className="block text-xs mb-1.5 ml-0.5" style={{ color: "var(--text-muted)" }}>
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                required
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--accent) 60%, transparent)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              />
              <ValidationError prefix={f.label} field={f.name} errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>
          ))}

          <div>
            <label className="block text-xs mb-1.5 ml-0.5" style={{ color: "var(--text-muted)" }}>
              {t.labelMessage}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t.placeholderMessage}
              required
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--accent) 60%, transparent)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all duration-200 disabled:opacity-40"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              boxShadow: "0 0 20px color-mix(in srgb, var(--accent) 25%, transparent)",
            }}
            onMouseEnter={(e) => { if (!state.submitting) (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
          >
            <Send size={14} />
            {state.submitting ? t.sending : t.send}
          </button>
        </form>
      </div>
    </section>
  );
}
