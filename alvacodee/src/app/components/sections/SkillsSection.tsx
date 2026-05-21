"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useLang } from "@/lib/lang-context";

const skillsEN = [
  { path: "~/skills/languages",      items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "Haskell", "Prolog"] },
  { path: "~/skills/frameworks",     items: ["React", "Next.js", "FastAPI", "Tailwind CSS", "JavaFX"] },
  { path: "~/skills/ml_data",        items: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Keras", "OpenCV", "XGBoost", "LightGBM", "CatBoost", "Matplotlib", "Seaborn"] },
  { path: "~/skills/infrastructure", items: ["Docker", "PostgreSQL", "SQLite", "Git", "Linux"] },
];

const skillsID = [
  { path: "~/keahlian/bahasa",         items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "Haskell", "Prolog"] },
  { path: "~/keahlian/framework",      items: ["React", "Next.js", "FastAPI", "Tailwind CSS", "JavaFX"] },
  { path: "~/keahlian/ml_data",        items: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Keras", "OpenCV", "XGBoost", "LightGBM", "CatBoost", "Matplotlib", "Seaborn"] },
  { path: "~/keahlian/infrastruktur",  items: ["Docker", "PostgreSQL", "SQLite", "Git", "Linux"] },
];

// Build a flat sequence of "events" to type through
type Event =
  | { kind: "cmd"; groupIdx: number; char: string } // one char of "ls ~/skills/..."
  | { kind: "result"; groupIdx: number }             // reveal result row for group
  | { kind: "cursor" };                              // final blinking cursor

function buildEvents(skills: typeof skillsEN): Event[] {
  const events: Event[] = [];
  for (let i = 0; i < skills.length; i++) {
    const cmdStr = `ls ${skills[i].path}`;
    for (const ch of cmdStr) {
      events.push({ kind: "cmd", groupIdx: i, char: ch });
    }
    events.push({ kind: "result", groupIdx: i });
  }
  events.push({ kind: "cursor" });
  return events;
}

export default function SkillsSection() {
  const { lang } = useLang();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = !mounted || resolvedTheme === "dark"; // default dark until mounted
  const skills = lang === "en" ? skillsEN : skillsID;
  const sectionRef = useRef<HTMLDivElement>(null);

  // State: how many events have been "processed"
  const [eventIdx, setEventIdx] = useState(-1);
  const [started, setStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const events = buildEvents(skills);

  // Reset when lang changes
  useEffect(() => {
    setEventIdx(-1);
    setStarted(false);
  }, [lang]);

  // IntersectionObserver to start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  // Drive the typewriter
  useEffect(() => {
    if (!started) return;
    if (eventIdx >= events.length - 1) return;
    const ev = events[eventIdx + 1];
    // cmd chars: fast; result rows: slightly slower; between groups: pause
    const delay =
      ev.kind === "cmd" ? 28 :
      ev.kind === "result" ? 120 :
      0;
    timerRef.current = setTimeout(() => setEventIdx((p) => p + 1), delay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [started, eventIdx, events]);

  // Derive display state from eventIdx
  // cmdTyped[i] = how many chars of group i's command have been typed
  const cmdTyped: number[] = skills.map(() => 0);
  const resultVisible: boolean[] = skills.map(() => false);
  let cursorVisible = false;

  for (let e = 0; e <= eventIdx && e < events.length; e++) {
    const ev = events[e];
    if (ev.kind === "cmd") cmdTyped[ev.groupIdx]++;
    else if (ev.kind === "result") resultVisible[ev.groupIdx] = true;
    else if (ev.kind === "cursor") cursorVisible = true;
  }

  // Theme-aware terminal colors
  const termBg     = isDark ? "#0d1117" : "#1e1e2e";
  const termBar    = isDark ? "#161b22" : "#2a2a3d";
  const termBorder = isDark ? "#30363d" : "#3a3a50";
  const cmdColor   = isDark ? "#e6edf3" : "#cdd6f4";
  const promptColor = "#4ade80";
  const pathColor  = isDark ? "#f0883e" : "#fab387";
  const itemColor  = isDark ? "#58a6ff" : "#89b4fa";
  const barText    = isDark ? "#7d8590" : "#a6adc8";

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20" ref={sectionRef}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-2"
           style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}>
          {lang === "en" ? "— Tools of the trade" : "— Senjata andalan"}
        </p>
        <h2 className="text-4xl" style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}>
          {lang === "en" ? "Skills" : "Keahlian"}
        </h2>
      </div>

      {/* Terminal window */}
      <div className="rounded-2xl overflow-hidden border max-w-3xl"
           style={{ background: termBg, borderColor: termBorder,
                    boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
                    fontFamily: "var(--font-mono)" }}>
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b"
             style={{ background: termBar, borderColor: termBorder }}>
          <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f56" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#27c840" }} />
          <span className="ml-3 text-xs" style={{ color: barText }}>~/alvacodee</span>
        </div>

        {/* Terminal body */}
        <div className="p-6 space-y-5 min-h-[300px]">
          {skills.map((group, i) => {
            const fullCmd = `ls ${group.path}`;
            const typed = fullCmd.slice(0, cmdTyped[i]);
            const showCaret = cmdTyped[i] < fullCmd.length && cmdTyped[i] > 0;

            return (
              <div key={group.path}>
                {/* Command line — only show if we've started typing this group */}
                {cmdTyped[i] > 0 && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm" style={{ color: promptColor }}>$</span>
                    <span className="text-sm" style={{ color: cmdColor }}>
                      {/* "ls " prefix */}
                      <span>ls </span>
                      {/* path part */}
                      <span style={{ color: pathColor }}>
                        {group.path.slice(0, Math.max(0, cmdTyped[i] - 3))}
                      </span>
                      {/* blinking caret while typing this line */}
                      {showCaret && (
                        <span className="inline-block w-2 h-[1em] align-middle ml-px"
                              style={{ background: cmdColor, animation: "blink 0.6s step-start infinite" }} />
                      )}
                    </span>
                  </div>
                )}

                {/* Result */}
                {resultVisible[i] && (
                  <div className="flex flex-wrap gap-x-6 gap-y-1 pl-4 mb-1">
                    {group.items.map((item) => (
                      <span key={item} className="text-sm" style={{ color: itemColor }}>{item}</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Final cursor */}
          {cursorVisible && (
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: promptColor }}>$</span>
              <span className="inline-block w-2 h-4 align-middle"
                    style={{ background: cmdColor, animation: "blink 1.2s step-start infinite" }} />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
