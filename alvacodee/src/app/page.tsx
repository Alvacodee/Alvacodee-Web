import Hero from "@/app/components/sections/Hero";
import TabSection from "@/app/components/sections/TabSection";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 pb-20"> 
      <Hero />
      <TabSection />
      
      {/* Garis pemisah tipis biar estetik */}
      <div className="container mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      <Contact />
    </main>
  );
}