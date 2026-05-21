"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { content } from "@/lib/content";

export default function ProjectsSection() {
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
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20" ref={ref}>
      {/* Heading */}
      <div className="reveal mb-12">
        <p
          className="text-xs uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
        >
          {lang === "en" ? "— Selected work" : "— Karya pilihan"}
        </p>
        <h2
          className="text-4xl"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
        >
          {t.sections.projects}
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {t.projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal card card-hover group flex flex-col gap-4 p-5"
            style={{ transitionDelay: `${(i % 4) * 60}ms` }}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3
                  className="font-semibold text-sm leading-snug transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {p.sub}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                className="shrink-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: "var(--text-subtle)" }}
              />
            </div>

            <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded-md border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-subtle)",
                    borderColor: "var(--border)",
                    background: "var(--bg-subtle)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
