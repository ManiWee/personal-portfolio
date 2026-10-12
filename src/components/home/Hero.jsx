import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { profile } from "../../data/profile"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-x-clip px-6 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] rounded-full bg-plum/40 blur-3xl md:h-[560px] md:w-[560px]"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-[340px] w-[340px] rounded-full bg-eggplant/80 blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-[1] mx-auto w-full max-w-6xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-rose/90"
        >
          {profile.title}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(2.75rem,9vw,6.25rem)] font-bold leading-[0.95] tracking-tight text-mist"
        >
          Manishi
          <br />
          <span className="text-rose">Weerasekara</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70 md:mt-8 md:text-xl"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap items-center gap-4 md:mt-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-rose px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            View projects
          </a>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center border border-plum px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-rose hover:text-rose"
          >
            Read the blog
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
