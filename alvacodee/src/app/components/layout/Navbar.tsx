"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efek Scroll Background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown Menu Data
  const fullNavItems = [
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Writing", href: "#writing" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  // Navbar Kanan Atas
  const mainNavItems = [
    { name: "About Me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Fungsi untuk handle klik link (Tutup menu & paksa scroll)
  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    window.location.hash = href;
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-800 bg-gray-950/80 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* LOGO DENGAN DROPDOWN */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              &lt;/Alvacodee&gt;
            </div>
            {/* Indikator Panah */}
            <ChevronDown 
                size={16} 
                className={`text-gray-400 transition-transform duration-300 group-hover:text-white ${isMenuOpen ? "rotate-180" : ""}`} 
            />
          </button>

          {/* Isi Dropdown */}
          {isMenuOpen && (
            <>
              {/* Layar Transparan (Klik luar untuk tutup) */}
              <div 
                className="fixed inset-0 z-40 cursor-default" 
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* Kotak Menu */}
              <div className="absolute top-full left-0 mt-4 w-56 rounded-xl border border-gray-800 bg-gray-900 p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col gap-1">
                  <span className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Full Menu</span>
                  {fullNavItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleLinkClick(item.href)}
                      className="text-left w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* NAVBAR KANAN */}
        {/* hidden md:flex artinya: Hilang di HP, Muncul di Laptop */}
        <div className="hidden md:flex gap-8">
          {mainNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* (Opsional) Tombol Menu Burger untuk HP bisa ditaruh di sini jika mau */}

      </div>
    </nav>
  );
}