import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="about" 
      className="relative container mx-auto max-w-6xl flex flex-col items-center justify-between gap-10 px-4 py-32 md:flex-row md:gap-28 md:py-40"
    >
      
      {/* BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px] opacity-50"></div>

      {/* LOGO */}
      <div className="relative flex shrink-0 justify-center group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur transition duration-500 group-hover:opacity-100 animate-pulse"></div>
        
        <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-gray-800 bg-gray-900 md:h-100 md:w-100">
          <Image
            src="/images/Alvan.jpg"
            alt="Zahran Alvan"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
      </div>

      {/* TEKS */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left z-10">
        <h2 className="mb-2 text-lg font-medium text-blue-400 tracking-wider uppercase">Software Engineer | Data & AI/ML Enthusiast</h2>
        
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
            Zahran Alvan
          </span>
        </h1>
        
        <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-400">
          I am a Computer Science student at <span className="text-blue-400">Institut Teknologi Bandung</span> with deep fascination for <span className="text-blue-400">Data & AI/ML</span>.
          However, I believe that powerful AI needs a robust home. Currently, I am dedicating my focus to mastering <span className="text-blue-400">Software Engineering</span> fundamentals from system architecture to clean code. 
          My goal is to build a strong foundation in creating scalable applications first, so that in the future, I can integrate intelligent AI/ML models into systems that are not just smart, but also reliable and production-ready.
        </p>

        <a href="/CV_Zahran-Alvan.pdf" download target="_blank" rel="noopener noreferrer">
          <button className="relative px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95">
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
}