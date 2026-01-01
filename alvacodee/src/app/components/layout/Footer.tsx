import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4">
        
        {/* Social Links */}
        <div className="flex gap-8">
          <a
            href="https://github.com/Alvacodee" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/zahran-alvan-putra-winarko" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:zahranalvan2901@gmail.com"
            className="text-gray-500 hover:text-red-400 hover:scale-110 transition-all duration-300"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Alvacodee</span>. All rights reserved.
        </p>

      </div>
    </footer>
  );
}