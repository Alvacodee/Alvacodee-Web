import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import ChatBot from "@/app/components/ui/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alvacodee",
  description: "Personal portfolio of Zahran Alvan",
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