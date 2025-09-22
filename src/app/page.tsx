"use client"
import React, { useState } from "react"

const Page: React.FC = () => {
  const [page, setPage] = useState<"home" | "about" | "contact">("home")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 font-sans flex flex-col">
      {/* Navbar */}
      <header className="bg-green-600 fixed top-0 w-full z-10 shadow-md">
        <nav className="flex justify-center gap-10 p-5 font-semibold text-lg text-white">
          <button onClick={() => setPage("home")} className={`${page==="home" ? "border-b-2 border-white" : ""} hover:text-yellow-200`}>Home</button>
          <button onClick={() => setPage("about")} className={`${page==="about" ? "border-b-2 border-white" : ""} hover:text-yellow-200`}>About</button>
          <button onClick={() => setPage("contact")} className={`${page==="contact" ? "border-b-2 border-white" : ""} hover:text-yellow-200`}>Contact</button>
        </nav>
      </header>

      <main className="pt-32 px-6 flex-1">
        {/* HOME */}
        {page==="home" && (
          <section className="text-center max-w-6xl mx-auto space-y-10">
            <h1 className="text-6xl font-extrabold text-green-700">Abdul Rehman – Eco Friendly Web</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating sustainable, clean, and modern websites that reflect the beauty of nature and technology combined.
            </p>
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80" alt="Nature green workspace" className="rounded-2xl shadow-2xl mx-auto w-72 max-w-4xl"/>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-green-100 rounded-xl shadow hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-green-700">🌿 Eco-Friendly</h3>
                <p className="text-gray-600 mt-2">Designs inspired by nature with clean and fresh aesthetics.</p>
              </div>
              <div className="p-6 bg-green-100 rounded-xl shadow hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-green-700">⚡ Optimized</h3>
                <p className="text-gray-600 mt-2">Performance-driven websites with minimal environmental footprint.</p>
              </div>
              <div className="p-6 bg-green-100 rounded-xl shadow hover:scale-105 transition">
                <h3 className="text-2xl font-bold text-green-700">📱 Mobile First</h3>
                <p className="text-gray-600 mt-2">Responsive layouts that adapt perfectly to all screens.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {page==="about" && (
          <section className="text-center max-w-5xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold text-green-700">About Abdul Rehman</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a web developer with a passion for building **eco-friendly, sustainable, and modern websites**.  
              My goal is to integrate technology with natural design inspirations.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="p-6 bg-green-100 rounded-xl shadow">
                <h3 className="text-2xl font-semibold text-green-700">💡 Skills</h3>
                <ul className="text-gray-600 mt-3 space-y-2">
                  <li>Next.js, React, TypeScript</li>
                  <li>TailwindCSS, Green UI</li>
                  <li>Performance & Optimization</li>
                  <li>Creative Design Thinking</li>
                </ul>
              </div>
              <div className="p-6 bg-green-100 rounded-xl shadow">
                <h3 className="text-2xl font-semibold text-green-700">🌍 Vision</h3>
                <p className="text-gray-600 mt-3">
                  Building technology that respects the environment and embraces natural design trends.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT */}
        {page==="contact" && (
          <section className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold text-green-700">Contact</h2>
            <p className="text-lg text-gray-600">Get in touch to collaborate on your next sustainable project.</p>
            <div className="space-y-4">
              <a href="mailto:abdulrehmanbhatti976@gmail.com" className="block text-green-700 hover:underline text-lg">📧 abdulrehmanbhatti976@gmail.com</a>
              <a href="tel:+923458229007" className="block text-green-700 hover:underline text-lg">📞 +92 345 8229007</a>
            </div>
            <form className="bg-green-100 p-6 rounded-xl shadow mt-10 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white outline-none"/>
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white outline-none"/>
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded bg-white outline-none"></textarea>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition">Send</button>
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-center py-6 mt-12 text-white text-sm shadow-inner">
        © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
      </footer>
    </div>
  )
}

export default Page
