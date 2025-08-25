'use client'

export default function Contact(){

    return <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow">
      <h2 className="text-2xl font-semibold md:text-3xl">
        Yes I can do it anyway, let's gows!.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 md:text-base">
        Open to full-time , contract roles and internships in Australia.
        Email me or say hello on my LinkedIn.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href="mailto:nuttapon9.kn@gmail.com"
          className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:shadow-lg"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/nuttapon9-khampoopen"
          className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:shadow-lg"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/IXYOZ"
          className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:shadow-lg"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
}