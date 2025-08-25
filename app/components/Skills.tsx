'use client'

export default function Skills(){

    return <section
    id="skills"
    className="mx-auto items-center max-w-6xl px-4 py-16 "
  >
    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-center">
      Skills
    </h2>
    <div className="mt-6 grid md:grid-cols-3">
      {[
        { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
        {
          title: "Backend",
          items: ["Node.js", "Express", "JWT", "REST", "Java", "PHP"],
        },
        {
          title: "Database & DevOps",
          items: [
            "MySQL",
            "SQL Server",
            "Prisma",
            "MongoDB",
            "Docker",
            "Vercel",
          ],
        },
      ].map(({ title, items }) => (
        <div
          key={title}
          className=" rounded-2xl border border-white/10 bg-white/5 p-5 gap-x-2 shadow"
        >
          <h3 className="text-lg font-medium text-white/90">{title}</h3>
          <ul className="mt-3 space-y-1 text-sm text-white/70">
            {items.map((i) => (
              <li key={i}>:{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
}