import { useEffect, useMemo } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { getPostBySlug } from "../data/blogPosts"

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function renderContent(content) {
  const blocks = content.split(/\n\n+/)
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-12 font-display text-2xl font-semibold text-mist md:text-3xl">
          {block.replace(/^##\s+/, "")}
        </h2>
      )
    }

    if (/^\d+\.\s/.test(block)) {
      const items = block.split("\n").filter(Boolean)
      return (
        <ol key={i} className="mt-5 list-decimal space-y-2 pl-5 text-mist/70">
          {items.map((item, j) => (
            <li key={j}>{item.replace(/^\d+\.\s+/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
          ))}
        </ol>
      )
    }

    if (block.startsWith("- ")) {
      const items = block.split("\n").filter(Boolean)
      return (
        <ul key={i} className="mt-5 list-disc space-y-2 pl-5 text-mist/70">
          {items.map((item, j) => (
            <li key={j}>{formatInline(item.replace(/^-\s+/, ""))}</li>
          ))}
        </ul>
      )
    }

    return (
      <p key={i} className="mt-5 text-lg leading-relaxed text-mist/70">
        {formatInline(block)}
      </p>
    )
  })
}

function formatInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-mist">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = useMemo(() => getPostBySlug(slug), [slug])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="px-6 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-mist/55 transition hover:text-rose"
          >
            <ArrowLeft size={16} />
            All posts
          </Link>

          <p className="mt-10 text-sm text-mist/45">
            <span className="text-rose/90">{post.category}</span>
            <span className="mx-2 text-plum">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-2 text-plum">·</span>
            {post.readTime} read
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-mist/60">{post.excerpt}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-4 border-t border-plum/30 pt-2"
        >
          {renderContent(post.content)}
        </motion.div>
      </div>
    </article>
  )
}
