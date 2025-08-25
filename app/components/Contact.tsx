'use client'

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
export default function Contact(){

    return <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow">
      <h2 className="text-2xl font-semibold md:text-3xl">
        {"Yes I can, let's gows!"}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 md:text-base">
        Open to full-time , contract roles and internships in Australia.
        Email me or say hello on my LinkedIn also Whatsapp.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-4 text-white text-2xl">
        <a
          href="mailto:nuttapon9.kn@gmail.com" target="_blank" rel="noopener noreferrer"
        >
          <HiOutlineMail/>
        </a>
        <a
          href="https://www.linkedin.com/in/nuttapon9-khampoopen" target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedin/>
        </a>
        <a
          href="https://github.com/IXYOZ" target="_blank" rel="noopener noreferrer"
        >
          <FaGithub/>
        </a>
        <a
          href="https://wa.me/0499763044" target="_blank" rel="noopener noreferrer"
        >
          <FaWhatsapp/>
        </a>
      </div>
    </div>
  </section>
}