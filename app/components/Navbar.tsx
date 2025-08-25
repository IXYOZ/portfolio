'use client'

export default function Navbar(){
    return  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="font-semibold tracking-tight text-slate-100">
          Yo.Dev
        </a>
        <ul className="hidden gap-6 text-sm md:flex">
          <li>
            <a href="#about" className="hover:text-white/90">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white/90">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white/90">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white/90">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="rounded-2xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10"
          aria-label="Contact Me"
        >
          Contact
        </a>
      </nav>
    </header>
}