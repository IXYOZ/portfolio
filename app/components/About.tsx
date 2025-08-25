'use client'

export default function About() {
    return  <section id="about" className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        About
      </h2>
      <div className="mt-6 flex flex-col items-center gap-8 ">
        <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 p-1 shadow-xl md:mx-0">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-3xl font-bold">
            YK
          </div>
        </div>
        <p className="text-sm/6 text-slate-300 md:text-base">
          Hi, I’m Yo, Nuttapong Khampoopen. I graduated in Software
          Engineering from Mae Fah Luang University. I learn fast, think
          critically, and always hunt for better solutions. I’m passionate
          about building systems that work in the real world, and I believe
          every problem has a shorter, smarter way to solve it. I constantly
          challenge myself to improve and grow.
        </p>
      </div>
    </section>
}