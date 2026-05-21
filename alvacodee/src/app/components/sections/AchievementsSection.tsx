"use client";
import { useEffect, useRef } from "react";
import { Trophy } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function AchievementsSection() {
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
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-20" ref={ref}>
      <div className="reveal mb-10">
        <p
          className="text-xs uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
        >
          {lang === "en" ? "— Recognition" : "— Penghargaan"}
        </p>
        <h2
          className="text-4xl"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
        >
          {t.sections.achievements}
        </h2>
      </div>

      <div className="space-y-4 max-w-3xl">
        {t.achievements.map((item, i) => (
          <div
            key={i}
            className="reveal card p-5 flex items-start gap-4"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div
              className="shrink-0 mt-0.5 p-2 rounded-lg"
              style={{ background: "color-mix(in srgb, var(--text) 8%, transparent)" }}
            >
              <Trophy size={15} style={{ color: "var(--text-muted)" }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: "var(--text-muted)" }}>
                    {item.sub}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {"tag" in item && item.tag && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-subtle)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
                  >
                    {item.date}
                  </span>
                </div>
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
