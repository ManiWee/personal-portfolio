import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects } from "../../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-mist/60">
            Research and systems work spanning privacy-preserving ML, financial AI, and
            distributed consistency.
          </p>
        </motion.div>

        <ul className="divide-y divide-plum/35 border-y border-plum/35">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="py-8 md:py-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
                <div className="max-w-2xl">
                  <p className="text-sm text-rose/85">{project.role}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold text-mist md:text-3xl">
                      {project.title}
                    </h3>
                    {project.href && project.href !== "#" && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="text-rose transition hover:text-mist"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                  {project.subtitle && (
                    <p className="mt-1 text-sm text-mist/45">{project.subtitle}</p>
                  )}
                  <p className="mt-3 text-base leading-relaxed text-mist/60">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-2 md:max-w-xs md:justify-end">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-wider text-plum">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
