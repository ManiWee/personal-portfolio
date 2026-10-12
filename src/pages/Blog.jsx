import { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { blogPosts } from "../data/blogPosts"

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="px-6 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-rose">Blog</p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-mist md:text-6xl">
            Notes on craft &amp; life
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-mist/60">
            Learning, experience, and lifestyle - the threads that shape how I build software.
          </p>
        </motion.header>

        <ul className="space-y-0 divide-y divide-plum/35 border-y border-plum/35">
          {blogPosts.map((post, index) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group grid gap-3 py-8 md:grid-cols-[140px_1fr] md:gap-10 md:py-10"
              >
                <div className="text-sm text-mist/45">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <p className="mt-1 text-rose/80">{post.category}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-mist transition group-hover:text-rose md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-mist/60">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-plum">{post.readTime} read</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
