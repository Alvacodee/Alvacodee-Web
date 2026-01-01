import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Cek apakah Body pesan masuk
    const body = await req.json();
    console.log("🔍 [DEBUG] Body diterima:", JSON.stringify(body));
    const { message } = body;

    // 2. Cek apakah API Key terbaca
    const apiKey = process.env.GEMINI_API_KEY;
    console.log("🔑 [DEBUG] API Key status:", apiKey ? "✅ Ada" : "❌ KOSONG");
    
    if (!apiKey) {
      throw new Error("API Key tidak ditemukan di Environment Variable Vercel");
    }

    // 3. Cek Inisialisasi Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 4. Proses Request ke Google
    console.log("🚀 [DEBUG] Mengirim request ke Google AI...");
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    console.log("✅ [DEBUG] Balasan diterima dari Google");

    return NextResponse.json({ response: text });

  } catch (error: any) {
    // INI BAGIAN PENTING: Log error ke Vercel Console
    console.error("🔥 [ERROR FATAL] Terjadi kesalahan:");
    console.error(error); 
    
    // Kirim pesan error asli ke frontend supaya terlihat di Inspect Element
    return NextResponse.json(
      { error: error.message || "Unknown Error", details: error }, 
      { status: 500 }
    );
  }
}