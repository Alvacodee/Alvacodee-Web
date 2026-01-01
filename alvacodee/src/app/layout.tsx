import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import ChatBot from "@/app/components/ui/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahran Alvan | Software Engineer | Data & AI/ML Enthusiast",
  description: "Portfolio Zahran Alvan (Alvacodee). Computer Science student at ITB with Software Engineering, Data Science, and AI/ML focus.",
  keywords: ["Zahran Alvan", "Alvacodee", "Portfolio", "Software Engineer", "ITB", "Informatika", "Computer Science", "Data Science", "AI/ML", "Web Developer"],
  authors: [{ name: "Zahran Alvan" }],
  verification: {
      google: "KSfwgislrB98OUDIEN5SbJRYpA_wJ4DpQHeaCy-22zc",
    },
  // Thumbnail
  openGraph: {
    title: "Zahran Alvan - Portfolio",
    description: "Connect with Zahran Alvan, a Software Engineer based in Indonesia.",
    url: "https://alvacodee-web.vercel.app", // Ganti kalau nanti beli domain
    siteName: "Zahran Alvan Portfolio",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <Navbar />
        
        <main className="pt-16">
          {children}
        </main>

        <Footer />

        <ChatBot />
      </body>
    </html>
  );
}