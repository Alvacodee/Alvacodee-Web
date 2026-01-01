"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("maqyzpyg");

  // Tampilkan pesan jika BERHASIL terkirim
  if (state.succeeded) {
    return (
      <section className="container mx-auto px-4 py-24 text-center" id="contact">
        <div className="mx-auto max-w-lg rounded-2xl bg-gray-900 border border-gray-800 p-8 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
            <h2 className="text-3xl font-bold text-white mb-4">Message Sent! 🚀</h2>
            <p className="text-gray-400">
              Thanks for reaching out. I'll check my inbox and get back to you as soon as possible.
            </p>
            <button 
                onClick={() => window.location.reload()} 
                className="mt-6 text-sm text-blue-500 hover:text-blue-400 underline"
            >
                Send another message
            </button>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-24" id="contact">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-400">
          Have a project in mind or just want to discuss about tech? Feel free to reach out by filling the form below. I&apos;m always open to new opportunities and collaborations!
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        {/* Tambahkan onSubmit={handleSubmit} di sini */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Input */}
          <div className="group">
             <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Your Email</label>
             <input 
                id="email"
                type="email" 
                name="email" // Atribut name="email" wajib ada biar kebaca Formspree
                placeholder="example@gmail.com"
                required
                className="w-full rounded-xl bg-gray-900 border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
             />
             <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Subject Input */}
          <div>
             <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Subject</label>
             <input 
                id="subject"
                type="text" 
                name="subject" // Atribut name="subject"
                placeholder="Collaboration Opportunity"
                required
                className="w-full rounded-xl bg-gray-900 border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
             />
          </div>

          {/* Message Input */}
          <div>
             <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Message</label>
             <textarea 
                id="message"
                name="message" // Atribut name="message"
                rows={5}
                placeholder="Hi Zahran, I'd like to talk about..."
                required
                className="w-full rounded-xl bg-gray-900 border border-gray-800 px-4 py-3 text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition resize-none"
             />
             <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}