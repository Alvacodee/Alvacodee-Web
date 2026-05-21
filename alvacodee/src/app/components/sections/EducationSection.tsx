"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function EducationSection() {
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
    <section id="education" className="mx-auto max-w-6xl px-6 py-20" ref={ref}>
      <div className="reveal mb-10">
        <p
          className="text-xs uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
        >
          {lang === "en" ? "— Academic path" : "— Jalur akademik"}
        </p>
        <h2
          className="text-4xl"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
        >
          {t.sections.education}
        </h2>
      </div>

      <div className="space-y-4 max-w-3xl">
        {t.education.map((item, i) => (
          <div
            key={i}
            className="reveal flex gap-5 card p-5"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex flex-col items-center pt-1 shrink-0">
              <div
                className="h-2.5 w-2.5 rounded-full border-2 mt-0.5 shrink-0"
                style={{ borderColor: "var(--text-muted)", background: "var(--bg-card)" }}
              />
              {i < t.education.length - 1 && (
                <div className="flex-1 w-px mt-2" style={{ background: "var(--border)" }} />
              )}
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {item.sub}
                  </p>
                </div>
                <span
                  className="text-[11px] shrink-0"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
                >
                  {item.date}
                </span>
              </div>
              <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
