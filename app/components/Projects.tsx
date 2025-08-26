'use client'

import { useEffect, useRef } from "react"

export default function Projects(){

    const projects = [
      {
        name: "V-booking",
        desc: "Vaccination booking with OTP.",
        tech: ["Next.js", "Prisma", "OTP"],
        demo: "https://v-booking-demo.vercel.app/",
        code: "https://github.com/IXYOZ/vaccine-booking.git",
      },
      {
        name: "CheersDo",
        desc: "Priority-based to-do with points and E-mail reminders.",
        tech: ["Next.js", "Prisma", "Tailwind", "8n8", "Docker"],
        demo: "",
        code: "https://github.com/IXYOZ/CheersDo.git",
      },
      {
        name: "HRIS Toyota Buzz",
        desc: "Manage all about human resources and print out.",
        tech: [
          "Java",
          "Primafaces",
          "Spring MVC",
          "Crystal Reports",
          "Oracle",
        ],
        demo: "",
        code: "",
      },
      {
        name: "YK (Yaowarat krungthep gold group) gold inventory&delivery",
        desc: "Manages inventory and delivery gold&stuff to front shop 200+ branches in thailand.",
        tech: ["VB.net", "MySQL", "Crystal Reports"],
        demo: "",
        code: "",
      },
      {
        name: "Flexserv (WIP)",
        desc: "Service platform concept that solve all problems for SME - in progress.",
        tech: ["Next.js", "Node.js"],
        demo: "",
        code: "",
      },
    ]

    const projectRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect (() =>{
      const observer = new IntersectionObserver(
        (entries) =>{
          entries.forEach((entry) =>{
            if(entry.isIntersecting){
              entry.target.classList.add('visible')
            }
          })
        },
        {threshold: 0.1} 
      )
      projectRefs.current.forEach((el) =>{
        if(el) observer.observe(el)
      })
    return () =>{
      projectRefs.current.forEach((el) =>{
        if(el) observer.unobserve(el!)
      })
    }
    }, [])

    return <section id="projects" className="mx-auto max-w-6xl px-4 py-16 animate-fadeIn">
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Project
      </h2>
      <a
        href="https://github.com/IXYOZ"
        className="text-sm text-white/80 hover:text-white"
      >
        View GitHub
      </a>
    </div>

    <div className="mt-6 grid gap-5 md:grid-cols-2">
      {projects.map((p,i) => (
        <article
          key={p.name}
          ref={(el) =>  {projectRefs.current[i] = el as HTMLDivElement | null}}
          style={{animationDelay: `${i*2}s`}}
          className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.05] p-5 shadow transition-transform duration-300 ease-out  hover:translate-y-1 hover:shadow-xl fade-in  "
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white/90">{p.name}</h3>
            <div className="flex gap-2 text-xs text-white/70">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-2 text-sm text-white/70">{p.desc}</p>
          <div className="mt-4 flex gap-3">
            {p.demo && (<a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              Live
            </a>
          )}
            {p.code && (
              <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              Code
            </a>
            )}
            
          </div>
        </article>
      ))}
    </div>
  </section>
}