"use client";

import { useState, useEffect } from "react";
import { FolderGit2, GraduationCap, Trophy, Code2, Briefcase, BookOpen } from "lucide-react";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    // Fungsi cek URL: Kalau ada #projects, otomatis ganti tab ke projects
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["education", "projects", "experience", "writing", "skills", "achievements"].includes(hash)) {
        setActiveTab(hash);
      }
    };
    
    // Pasang pendengar event
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Jalankan sekali saat halaman dimuat
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Data Konten
  const tabContent = {
    education: (
      <div className="space-y-6">
        <Card 
            title="Institut Teknologi Bandung" 
            subtitle="Bachelor of Computer Science"
            date="2024 - Present"
            desc="Active Course: OOP, Algorithm Strategy, Formal Language Theory and Automata, Computer Network, 	Database, Project Management."
        />
        <Card 
            title="SMAN 2 Nganjuk" 
            subtitle="Alumni"
            date="2020 - 2023"
            desc="Mathematics and Natural Science."
        />
        <Card 
            title="SMPN 1 Nganjuk" 
            subtitle="Alumni"
            date="2017 - 2020"
            desc="General Studies."
        />
      </div>
    ),
    projects: (
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard 
            title="Alvacodee Portfolio Website"
            tech="Next.js • Tailwind • Docker"
            desc="Create a minimalist portfolio website."
            link="https://github.com/Alvacodee/Alvacodee-Web"
        />
        <ProjectCard 
            title="Hospital Management System"
            tech="C • Data Structure and Algorithms • Makefile"
            desc="Develop a cli-based hospital management system in C using various data structures like Linked List, Stack, Queue, and Tree."
            link="https://github.com/Alvacodee/Sistem-Manajemen-Rumah-Sakit"
        />  
        <ProjectCard 
            title="Pokemon Game"
            tech="Prolog"
            desc="Build a Pokemon Game using Prolog."
            link="https://github.com/Alvacodee/Game-Pokemon"
        />
        <ProjectCard 
            title="GDGoC AI Hands On"
            tech="Python • Pandas • NumPy • Matplotlib • Seaborn • Scikit-learn • NLTK • Keras • TensorFlow"
            desc="A comprehensive book recommendation system. Built the frontend using React and integrated it with a FastAPI backend."
            link="https://github.com/Alvacodee/GDGoC-AI-Hands-On"
        />
        <ProjectCard 
            title="EigenPustaka"
            tech="React • Tailwind • Vite • Python • FastAPI • Docker"
            desc="A comprehensive book recommendation system. Built the frontend using React and integrated it with a FastAPI backend."
            link="https://github.com/Alvacodee/EigenPustaka"
        />
        <ProjectCard 
            title="EduHub"
            tech="Java • JavaFX • OOP"
            desc="Build a LMS platform and implemented a quiz feature using MVC architecture, demonstrating strong Object-Oriented Programming principles."
            link="https://github.com/Alvacodee/EduHub"
        />
        <ProjectCard 
            title="Face Recognition Analysis"
            tech="Python • Numpy • Matplotlib • Scikit-learn • OpenCV"
            desc="Authored a paper comparing Eigenfaces (PCA) and Fisherfaces (LDA) algorithms for face recognition using the Olivetti dataset."
            link="https://github.com/Alvacodee/PCA-Vs-LDA"
        />
        <ProjectCard 
            title="Groddit (Reddit Clone)"
            tech="C • Data Structure and Algorithms • Makefile"
            desc="Developed a Reddit-like platform clone in C. Implemented complex ADT Tree structures for handling nested comments and replies and voting."
            link="https://github.com/Alvacodee/Groddit"
        />
      </div>
    ),
    experience: (
      <div className="space-y-6">
        <Card 
            title="Explorer - Google Developer Student Clubs ITB" 
            subtitle="Path AI"
            date="Apr 2025 - Present"
            desc="Completed an intensive curriculum Intro to AI and Python untill From NLP to LLM."
        />
        <Card 
            title="Staff - Wisuda Oktober HMIF ITB 2025" 
            subtitle="Sponsorship Division"
            date="Sept 2025 - Oct 2025"
            desc="Managed a database of 50+ potential sponsors using spreadsheets to track outreach progress and funding status. Coordinated with external stakeholders to ensure mutually beneficial agreements for the graduation event. Executed strategic outreach to over 50+ potential corporate partners and startups to secure funding for the event."
        />
        <Card 
            title="Tutor - Asrama ITB Jatinangor" 
            subtitle="Discipline and Environmental Health"
            date="July 2025 - Present"
            desc="Managed cleanliness and orderliness of dormitory environment for 100+ residents. Organized regular health and hygiene campaigns to promote well-being among residents."
        />
      </div>
    ),
    writing: (
      <div className="grid gap-4 md:grid-cols-2">
        <WritingCard 
            title="Pemetaan Jaringan Blockchain Sebagai Graf Terhubung : Analisis Diameter, Clustering, dan Kerentanannya"
            platform="Rinaldi Munir Website"
            date="June 2025"
            desc="This paper models peer connectivity in blockchain systems using graph theory, where each node represents a peer and edges represent communication links. The study analyzes graph metrics such as diameter, degree distribution, and clustering coefficient to determine the robustness and efficiency of blockchain networks. The results highlight the importance of connectivity in maintaining the robustness and performance of blockchain systems."
            link="https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2024-2025-2/Makalah2025/Makalah-Matdis-2025-IF-ITB%20(123).pdf" 
        />

        <WritingCard 
            title="Comparative Analysis of Face Recognition: Eigenfaces (PCA) vs Fisherfaces (LDA) under Varying Facial Expressions and Illumination"
            platform="GitHub Repository"
            date="Dec 2025"
            desc="A comparative study on face recognition algorithms using the Olivetti dataset. Analyzed accuracy trade-offs between PCA and LDA."
            link="https://github.com/Alvacodee/PCA-Vs-LDA/blob/main/doc/13524124_Zahran-Alvan-P-W.pdf" 
        />
         <WritingCard 
            title="Dari Mimpi Kecil Hingga Gerbang ITB: Perjalanan Panjang Menuju Awal Lembaran Baru"
            platform="Medium"
            date="Sep 2025"
            desc="My personal journey from a small-town dreamer to an ITB student, highlighting the challenges and triumphs along the way."
            link="https://medium.com/@zahranalvan2901/dari-mimpi-kecil-hingga-gerbang-itb-perjalanan-panjang-menuju-awal-lembaran-baru-072bddd599de" 
        />
      </div>
    ),
    skills: (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
            "Python", "C/C++", "Prolog",  "Haskell",
            "HTML/CSS", "TypeScript","Java", "JavaScript",
            "React","Next.js", "Tailwind", "SQLite", 
            "FastAPI", "PostgreSQL","Docker", "Git",
            "Pandas", "NumPy", "Matplotlib", "Seaborn",
            "Scipy", "Scikit-Learn", "TensorFlow", "Keras",
            "OpenCV","XGBoost", "LightGBM", "CatBoost"

        ].map((skill) => (
          <div key={skill} className="rounded-xl bg-gray-900 border border-gray-800 p-4 text-center hover:border-blue-500/50 hover:bg-gray-800 transition cursor-default group">
            <span className="font-semibold text-gray-300 group-hover:text-white">{skill}</span>
          </div>
        ))}
      </div>
    ),
    achievements: (
      <div className="space-y-4">
        <Card 
            title="GDGoC ITB-X" 
            subtitle="Path AI"
            date="2025"
            desc="Third place Final Leaderboard GDGoC ITB-X 2025. Solved real-world data problems with data preprocessing, data cleaning, and data visualization, and use machine learning approach."
        />
      </div>
    ),
  };

  // Tombol Tab
  const tabs = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "writing", label: "Writing", icon: BookOpen },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "achievements", label: "Achievements", icon: Trophy },
  ];

  return (
    <section id="project" className="container mx-auto px-4 py-16 relative">
      <div id="education" className="absolute -top-24 left-0"></div>
      <div id="projects" className="absolute -top-24 left-0"></div>
      <div id="experience" className="absolute -top-24 left-0"></div>
      <div id="writing" className="absolute -top-24 left-0"></div>
      <div id="skills" className="absolute -top-24 left-0"></div>
      <div id="achievements" className="absolute -top-24 left-0"></div>
      
      
      {/* Tombol Navigasi Tab */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 border 
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    : "bg-gray-900/50 border-gray-800 text-gray-400 hover:bg-gray-800 hover:border-gray-700"
                }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Area Konten */}
      <div className="mx-auto max-w-4xl min-h-[400px]">
         {/* @ts-ignore */}
         <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             {tabContent[activeTab as keyof typeof tabContent]}
         </div>
      </div>

    </section>
  );
}

// Komponen Card Biasa (Education/Achievement)
function Card({ title, subtitle, date, desc }: any) {
  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-2xl bg-gray-900/50 border border-gray-800 p-6 hover:border-blue-500/30 transition">
        <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {subtitle && <p className="text-blue-400 font-medium">{subtitle}</p>}
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
        <div className="shrink-0">
             <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-xs font-mono text-gray-400 border border-gray-700">{date}</span>
        </div>
    </div>
  );
}

// Komponen Card Khusus Project (Grid style)
function ProjectCard({ title, tech, desc, link }: any) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg">
          <div className="mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
              <p className="text-xs font-mono text-blue-500 mt-1">{tech}</p>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{desc}</p>
          
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-colors cursor-pointer">
          <a
            href={link}
            target="_blank" // Membuka di tab baru
            rel="noopener noreferrer" // Keamanan standar
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-colors cursor-pointer w-fit"
          >
            View Details <span>→</span>
          </a>
          </div>
          
      </div>
    );
}
  // Komponen Kartu Khusus Tulisan
function WritingCard({ title, platform, date, desc, link }: any) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl bg-gray-900 border border-gray-800 p-6 transition-all hover:border-blue-500/50 hover:bg-gray-800/50"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
            <span className="text-xs font-mono text-blue-400 mb-2">{platform} • {date}</span>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
            </h3>
        </div>
        <BookOpen size={20} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">
        {desc}
      </p>
    </a>
  );
}