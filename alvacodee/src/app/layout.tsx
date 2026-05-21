import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/lib/lang-context";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import ChatBot from "@/app/components/ui/ChatBot";

export const metadata: Metadata = {
  title: "Zahran Alvan | Software Engineer | Data & AI/ML Enthusiast",
  description: "Portfolio of Zahran Alvan (Alvacodee). CS student at ITB focused on Software Engineering, Data Science, and AI/ML.",
  keywords: ["Zahran Alvan", "Alvacodee", "Portfolio", "Software Engineer", "ITB", "Data Science", "AI/ML"],
  authors: [{ name: "Zahran Alvan Putra Winarko" }],
  verification: { google: "KSfwgislrB98OUDIEN5SbJRYpA_wJ4DpQHeaCy-22zc" },
  openGraph: {
    title: "Zahran Alvan - Portfolio",
    description: "Software Engineer & Data/AI Enthusiast based in Bandung, Indonesia.",
    url: "https://alvacodee-web.vercel.app",
    siteName: "Zahran Alvan Portfolio",
    type: "website",
    images: [{ url: "https://alvacodee-web.vercel.app/images/alvacodee.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-base text-base antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LangProvider>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
            <ChatBot />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
