"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function WritingSection() {
  const { lang } = useLang();
  const t = content[lang];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="writing" className="mx-auto max-w-6xl px-6 py-20" ref={ref}>
      <div className="reveal mb-12">
        <p
          className="text-xs uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
        >
          {lang === "en" ? "— Words" : "— Kata-kata"}
        </p>
        <h2
          className="text-4xl"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
        >
          {t.sections.writing}
        </h2>
      </div>

      <div className="space-y-4 max-w-3xl">
        {t.writing.map((w, i) => (
          <a
            key={w.title}
            href={w.link}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal card card-hover group flex items-start justify-between gap-4 p-6"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex-1 min-w-0">
              <div
                className="flex items-center gap-2 text-[11px] mb-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
              >
                <span>{w.platform}</span>
                <span>·</span>
                <span>{w.date}</span>
              </div>
              <h3
                className="font-semibold text-sm mb-1 leading-snug transition-colors group-hover:underline"
                style={{ color: "var(--text)" }}
              >
                {w.title}
              </h3>
              <p
                className="text-xs italic mb-2"
                style={{ color: "var(--text-subtle)" }}
              >
                {w.sub}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {w.desc}
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="shrink-0 mt-1 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              style={{ color: "var(--text-subtle)" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
