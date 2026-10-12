import { motion } from "framer-motion"
import { skillGroups } from "../../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
            Skills
          </h2>
          <p className="mt-4 text-lg text-mist/60">
            AI systems, backends, cloud delivery, and the architecture patterns that keep them
            maintainable.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <h3 className="font-display text-xl font-semibold text-rose">{group.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-mist/65">
                {group.items.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
