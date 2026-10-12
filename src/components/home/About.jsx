import { motion } from "framer-motion"
import { profile } from "../../data/profile"

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
            About
          </h2>
          <p className="mt-4 text-sm text-mist/45">{profile.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="space-y-6 text-lg leading-relaxed text-mist/70"
        >
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}

          <div className="space-y-4 border-t border-plum/30 pt-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-rose">
              Education
            </p>
            {profile.education.map((item) => (
              <div key={item.degree}>
                <p className="font-display text-lg font-semibold text-mist">{item.degree}</p>
                <p className="text-sm text-mist/55">
                  {item.school} · {item.period} · {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
