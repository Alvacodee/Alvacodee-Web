"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/lang-context";

const groupsEN = [
  {
    id: "g-sma",
    heading: "Before it all started.",
    sub: "SMA Negeri 2 Nganjuk — where the dream of ITB first took shape. A small town, a big ambition, and a lot of questions about what comes next.",
    layout: "2col",
    photos: [
      { src: "/images/journey/sma.jpeg",  caption: "Graduation · SMAN 2 Nganjuk · 2023", fit: "cover" },
      { src: "/images/journey/sma1.jpeg", caption: "Last days before a new chapter · 2023", fit: "cover" },
    ],
  },
  {
    id: "g-awalitb",
    heading: "The beginning of a new chapter.",
    sub: "First days at Institut Teknologi Bandung. Everything felt overwhelming and exciting at the same time — exactly where I needed to be.",
    layout: "1+2",
    photos: [
      { src: "/images/journey/awalitb.jpeg",  caption: "First steps at ITB · 2024", fit: "contain" },
      { src: "/images/journey/awalitb1.jpeg", caption: "Finding my footing · 2024", fit: "cover" },
      { src: "/images/journey/awalitb2.jpeg", caption: "The campus I call home · 2024", fit: "cover" },
    ],
  },
  {
    id: "g-jaket",
    heading: "Earning the colors.",
    sub: "Year one: the STEI-K jacket. Year two: the HMIF jacket. Each one earned — not given. A symbol of belonging to something bigger than yourself.",
    layout: "3col",
    photos: [
      { src: "/images/journey/tahunpertama.jpeg", caption: "STEI-K jacket · Year 1", fit: "cover" },
      { src: "/images/journey/tahunkedua.jpeg",   caption: "HMIF jacket · Year 2", fit: "cover" },
      { src: "/images/journey/tahunkedua1.jpeg",  caption: "Fresh Air of Nganjuk · Slow Living", fit: "cover" },
    ],
  },
  {
    id: "g-google",
    heading: "Some doors only open once.",
    sub: "Because of a Top 3 finish at GDGoC ITB-X, I got the chance to visit Google Indonesia — and walk through halls I once only dreamed about.",
    layout: "2+2",
    photos: [
      { src: "/images/journey/googleindo.jpeg",  caption: "Google Indonesia Office · Nov 2025", fit: "cover" },
      { src: "/images/journey/googleindo1.jpeg", caption: "Inside Google · Nov 2025", fit: "cover" },
      { src: "/images/journey/googleindo2.jpeg", caption: "GDGoC Cloud Workshop · Nov 2025", fit: "cover" },
      { src: "/images/journey/googleindo3.jpeg", caption: "Google Indonesia Office Guide · Nov 2025", fit: "contain" },
    ],
  },
  {
    id: "g-gdgoc",
    heading: "The result that opened the door.",
    sub: "Top 3 on the GDGoC ITB-X Final Leaderboard. A challenging journey through AI, data, and problem-solving — proof that the late nights were worth it.",
    layout: "single-contain",
    photos: [
      { src: "/images/journey/gdgocitbx.jpeg", caption: "GDGoC ITB-X Final Leaderboard · Top 3 · Nov 2025", fit: "contain" },
    ],
  },
];

const groupsID = [
  {
    id: "g-sma",
    heading: "Sebelum semuanya dimulai.",
    sub: "SMA Negeri 2 Nganjuk — tempat mimpi tentang ITB pertama kali terbentuk. Kota kecil, ambisi besar, dan banyak pertanyaan tentang apa yang akan datang.",
    layout: "2col",
    photos: [
      { src: "/images/journey/sma.jpeg",  caption: "Wisuda · SMAN 2 Nganjuk · 2023", fit: "cover" },
      { src: "/images/journey/sma1.jpeg", caption: "Hari-hari terakhir sebelum babak baru · 2023", fit: "cover" },
    ],
  },
  {
    id: "g-awalitb",
    heading: "Awal dari babak baru.",
    sub: "Hari-hari pertama di Institut Teknologi Bandung. Segalanya terasa overwhelming dan menegangkan sekaligus — tepat di tempat yang saya butuhkan.",
    layout: "1+2",
    photos: [
      { src: "/images/journey/awalitb.jpeg",  caption: "Langkah pertama di ITB · 2024", fit: "contain" },
      { src: "/images/journey/awalitb1.jpeg", caption: "Menemukan jalan · 2024", fit: "cover" },
      { src: "/images/journey/awalitb2.jpeg", caption: "Kampus yang saya sebut rumah · 2024", fit: "cover" },
    ],
  },
  {
    id: "g-jaket",
    heading: "Mendapatkan warnanya.",
    sub: "Tahun pertama: jaket STEI-K. Tahun kedua: jaket HMIF. Masing-masing diraih — bukan diberikan. Simbol kebersamaan dengan sesuatu yang lebih besar dari diri sendiri.",
    layout: "3col",
    photos: [
      { src: "/images/journey/tahunpertama.jpeg", caption: "Jaket STEI-K · Tahun 1", fit: "cover" },
      { src: "/images/journey/tahunkedua.jpeg",   caption: "Jaket HMIF · Tahun 2", fit: "cover" },
      { src: "/images/journey/tahunkedua1.jpeg",  caption: "Udara Segar Nganjuk · Slow Living", fit: "cover" },
    ],
  },
  {
    id: "g-google",
    heading: "Beberapa pintu hanya terbuka sekali.",
    sub: "Berkat posisi Top 3 di GDGoC ITB-X, saya mendapat kesempatan mengunjungi Google Indonesia — dan berjalan melewati lorong yang dulu hanya ada dalam mimpi.",
    layout: "2+2",
    photos: [
      { src: "/images/journey/googleindo.jpeg",  caption: "GDGoC Cloud Workshop · Nov 2025", fit: "cover" },
      { src: "/images/journey/googleindo1.jpeg", caption: "Di dalam Google · Nov 2025", fit: "cover" },
      { src: "/images/journey/googleindo2.jpeg", caption: "Kantor Google Indonesia · Nov 2025", fit: "cover" },
      { src: "/images/journey/googleindo3.jpeg", caption: "Panduan Kantor Google Indonesia · Nov 2025", fit: "contain" },
    ],
  },
  {
    id: "g-gdgoc",
    heading: "Hasil yang membuka pintu itu.",
    sub: "Top 3 di Final Leaderboard GDGoC ITB-X. Perjalanan menantang melalui AI, data, dan pemecahan masalah — bukti bahwa malam-malam panjang itu sepadan.",
    layout: "single-contain",
    photos: [
      { src: "/images/journey/gdgocitbx.jpeg", caption: "Final Leaderboard GDGoC ITB-X · Top 3 · Nov 2025", fit: "contain" },
    ],
  },
];

// ---- Photo card ----
function PhotoCard({
  photo,
  aspect = "4/3",
}: {
  photo: { src: string; caption: string; fit?: string };
  aspect?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const objectFit = (photo.fit ?? "cover") as "cover" | "contain";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{
          aspectRatio: aspect,
          background: objectFit === "contain" ? "var(--bg-subtle)" : undefined,
        }}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="transition-all duration-500"
          style={{
            objectFit: objectFit,
            objectPosition: "center",
            filter: hovered
              ? "grayscale(0%) brightness(1)"
              : "grayscale(100%) brightness(0.5)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 650px"
        />
      </div>
      <p
        className="mt-2 text-xs italic transition-colors duration-300"
        style={{
          fontFamily: "var(--font-mono)",
          color: hovered ? "var(--text-muted)" : "var(--text-subtle)",
        }}
      >
        {photo.caption}
      </p>
    </div>
  );
}

// ---- Photo grid — layout-aware ----
function PhotoGrid({
  photos,
  layout,
}: {
  photos: { src: string; caption: string; fit?: string }[];
  layout: string;
}) {
  // single — full width, object-cover
  if (layout === "single") {
    return (
      <div className="max-w-2xl">
        <PhotoCard photo={photos[0]} aspect="16/9" />
      </div>
    );
  }

  // single-contain — full width, object-contain (no crop)
  if (layout === "single-contain") {
    return (
      <div className="max-w-2xl">
        <PhotoCard photo={photos[0]} aspect="4/3" />
      </div>
    );
  }

  // 2col — two equal columns
  if (layout === "2col") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {photos.map((p) => (
          <PhotoCard key={p.src} photo={p} aspect="4/3" />
        ))}
      </div>
    );
  }

  // 3col — three equal portrait columns
  if (layout === "3col") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((p) => (
          <PhotoCard key={p.src} photo={p} aspect="3/4" />
        ))}
      </div>
    );
  }

  // 1+2 — one tall on left, two stacked on right
  if (layout === "1+2") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <PhotoCard photo={photos[0]} aspect="3/4" />
        </div>
        <div className="flex flex-col gap-4">
          <PhotoCard photo={photos[1]} aspect="4/3" />
          <PhotoCard photo={photos[2]} aspect="4/3" />
        </div>
      </div>
    );
  }

  // 2+2 — two rows of two
  if (layout === "2+2") {
    return (
      <div className="grid grid-cols-2 gap-4">
        {photos.map((p) => (
          <PhotoCard key={p.src} photo={p} aspect="4/3" />
        ))}
      </div>
    );
  }

  // fallback
  return (
    <div className="grid grid-cols-2 gap-4">
      {photos.map((p) => (
        <PhotoCard key={p.src} photo={p} aspect="4/3" />
      ))}
    </div>
  );
}

// ---- Section ----
export default function JourneySection() {
  const { lang } = useLang();
  const groups = lang === "en" ? groupsEN : groupsID;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-20" ref={ref}>
      {/* Heading */}
      <div className="reveal mb-16">
        <p
          className="text-xs uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-subtle)" }}
        >
          {lang === "en" ? "— Figures" : "— Sosok"}
        </p>
        <h2
          className="text-4xl"
          style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
        >
          {lang === "en" ? "Journey" : "Perjalanan"}
        </h2>
      </div>

      {/* Groups */}
      <div className="space-y-28">
        {groups.map((group, gi) => (
          <div
            key={group.id}
            className="reveal"
            style={{ transitionDelay: `${gi * 50}ms` }}
          >
            {/* Editorial header */}
            <div className="mb-8 max-w-2xl">
              <h3
                className="text-2xl md:text-3xl leading-snug mb-3"
                style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
              >
                {group.heading}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {group.sub}
              </p>
            </div>

            <PhotoGrid photos={group.photos} layout={group.layout} />
          </div>
        ))}
      </div>
    </section>
  );
}
