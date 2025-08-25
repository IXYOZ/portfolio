'use client'

import { motion } from "framer-motion" 

export default function Hero(){
    return  <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-24 pt-16 text-center md:pt-24 animate-fadeIn">
    {/* {Glow} */}
    <div className="pointer-events-none absolute inset-0 -z-10 animate-pulse bg-[radial-gradient(50%_40%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      Available for work
    </span>

    <motion.h1
      className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Nuttapong Khampoopen
      <span className="block py-2 bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
        Full Stack Developer
      </span>
    </motion.h1>
    <p className="max-w-2xl text-pretty text-sm/6 text-slate-300 md:text-base/7">
      To solving problems, face them & do more.
    </p>

    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href="Resume_Nuttapong_Khampoopen_2025_JuniorDev.pdf"
        download
        className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow hover:shadow-lg"
      >
        📄 Download CV
      </a>
      <a
        href="#projects"
        className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition duration-300"
      >
        View Projects
      </a>
    </div>

    {/* {Tech badges} */}
    <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-white/70">
      {[
        "Next.js",
        "Java",
        "PHP",
        "React",
        "Node.js",
        "Express",
        "SQL Server",
        "MySQL",
        "Prisma",
        "Tailwind",
        "MUI",
        "Docker",
      ].map((t) => (
        <span
          key={t}
          className=" rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
        >
          {t}
        </span>
      ))}
    </div>
  </section>
}