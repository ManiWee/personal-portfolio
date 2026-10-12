import { motion } from "framer-motion"
import { experience } from "../../data/experience"

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-mist/60">
            Enterprise products, consulting systems, and AI research across Sri Lanka and
            global teams.
          </p>
        </motion.div>

        <ol className="space-y-0 divide-y divide-plum/35 border-y border-plum/35">
          {experience.map((job, index) => (
            <motion.li
              key={job.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-4 py-10 md:grid-cols-[220px_1fr] md:gap-12"
            >
              <div>
                <p className="text-sm text-mist/45">{job.period}</p>
                <p className="mt-2 font-display text-xl font-semibold text-mist">{job.company}</p>
                <p className="mt-1 text-sm text-rose/90">{job.role}</p>
              </div>
              <ul className="space-y-3 text-base leading-relaxed text-mist/65">
                {job.highlights.map((item) => (
                  <li key={item.slice(0, 40)} className="pl-4 relative before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-plum">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
