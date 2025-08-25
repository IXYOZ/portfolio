'use client'

export default function Footer(){

    return       <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-white/60">
      <p>{new Date().getFullYear()} Nuttapong Khampoopen</p>
      <p>Built with Next.js & Tailwind</p>
    </div>
  </footer>
}