import { motion } from "framer-motion"
import { profile } from "../../data/profile"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden border border-plum/40 bg-gradient-to-br from-eggplant/80 via-navy to-ink px-8 py-16 md:px-16 md:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-rose/15 blur-3xl"
          />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose">Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
            Let&apos;s build something thoughtful.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-mist/65">
            Open to senior engineering roles, AI systems work, and collaborations. Based in{" "}
            {profile.location}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex bg-mist px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-rose"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-plum px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-rose hover:text-rose"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
