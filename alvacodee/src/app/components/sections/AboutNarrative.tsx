"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/lang-context";

const narrativeEN = [
  {
    label: "01 — Origin",
    heading: "From a small town in East Java.",
    body: `I grew up in Nganjuk — a quiet city where ambition sometimes feels bigger than the surroundings. From early on, I was drawn to puzzles, logic, and the quiet satisfaction of figuring things out. That curiosity eventually led me to code.`,
  },
  {
    label: "02 — Why CS",
    heading: "I chose CS because it's the closest thing to building worlds.",
    body: `Computing felt like a superpower. The idea that you could express an idea precisely enough that a machine would execute it — that's wild to me. I came to ITB wanting to understand not just how to write code, but how systems actually work at a deep level.`,
  },
  {
    label: "03 — Current Focus",
    heading: "Where I am right now.",
    body: `I'm in my fourth semester, currently balancing OOP, Algorithm Strategy, Formal Language Theory, Computer Networks, and Database Systems. My academic path runs parallel to a personal obsession with Data Science, Machine Learning, and building things that are both functional and thoughtfully designed.`,
  },
  {
    label: "04 — Values",
    heading: "What I believe about good software.",
    body: `Great software is an act of empathy. It anticipates how real people will use it, fails gracefully when things go wrong, and respects the time of everyone who touches it — users, maintainers, and future developers. I try to build with that in mind.`,
  },
  {
    label: "05 — Next",
    heading: "Where I'm headed.",
    body: `I want to work at the intersection of AI systems and real-world impact — whether that's in NLP, Computer Vision, or the infrastructure that powers large-scale data products. I'm actively competing, building, and learning to get there.`,
  },
];

const narrativeID = [
  {
    label: "01 — Awal",
    heading: "Dari kota kecil di Jawa Timur.",
    body: `Saya tumbuh di Nganjuk — kota yang tenang di mana ambisi terkadang terasa lebih besar dari lingkungan sekitarnya. Sejak dini, saya tertarik pada teka-teki, logika, dan kepuasan diam-diam dari menemukan jawaban. Rasa ingin tahu itu akhirnya membawa saya ke dunia kode.`,
  },
  {
    label: "02 — Kenapa CS",
    heading: "Saya memilih CS karena ini paling dekat dengan membangun dunia.",
    body: `Komputasi terasa seperti kekuatan super. Ide bahwa kamu bisa mengekspresikan sesuatu dengan cukup tepat sehingga mesin akan menjalankannya — itu luar biasa bagi saya. Saya datang ke ITB ingin memahami bukan hanya cara menulis kode, tetapi bagaimana sistem benar-benar bekerja di level yang dalam.`,
  },
  {
    label: "03 — Fokus Sekarang",
    heading: "Di mana saya berada sekarang.",
    body: `Saya sedang di semester empat, saat ini menyeimbangkan OOP, Strategi Algoritma, Teori Bahasa Formal, Jaringan Komputer, dan Basis Data. Jalur akademis saya berjalan sejajar dengan obsesi pribadi terhadap Data Science, Machine Learning, dan membangun sesuatu yang fungsional sekaligus dirancang dengan baik.`,
  },
  {
    label: "04 — Nilai",
    heading: "Apa yang saya percaya tentang perangkat lunak yang baik.",
    body: `Perangkat lunak yang hebat adalah tindakan empati. Ia mengantisipasi bagaimana orang nyata akan menggunakannya, gagal dengan anggun ketika sesuatu salah, dan menghormati waktu semua orang yang menyentuhnya — pengguna, pemelihara, dan pengembang di masa depan. Saya berusaha membangun dengan prinsip itu.`,
  },
  {
    label: "05 — Ke Depan",
    heading: "Ke mana saya menuju.",
    body: `Saya ingin bekerja di persimpangan sistem AI dan dampak nyata di dunia — baik itu di NLP, Computer Vision, atau infrastruktur yang mendukung produk data skala besar. Saya aktif berkompetisi, membangun, dan belajar untuk sampai ke sana.`,
  },
];

export default function AboutNarrative() {
  const { lang } = useLang();
  const narrative = lang === "en" ? narrativeEN : narrativeID;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = containerRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20" ref={containerRef}>
      {/* Section label */}
      <p
        className="text-xs uppercase tracking-widest mb-16 reveal"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
      >
        {lang === "en" ? "— A bit more about me" : "— Sedikit lebih tentang saya"}
      </p>

      <div className="space-y-20">
        {narrative.map((item, i) => (
          <div
            key={i}
            className="reveal grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 items-start"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Label */}
            <div className="pt-1">
              <span
                className="text-xs tracking-widest uppercase block mb-1"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
              >
                {item.label}
              </span>
              <div
                className="hidden md:block h-px mt-4 w-full opacity-40"
                style={{ background: "linear-gradient(to right, var(--border), transparent)" }}
              />
            </div>

            {/* Content */}
            <div>
              <h3
                className="text-2xl md:text-3xl leading-snug mb-4"
                style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
              >
                {item.heading}
              </h3>
              <p
                className="text-[0.9375rem] leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
