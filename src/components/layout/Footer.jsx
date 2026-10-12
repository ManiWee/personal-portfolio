import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import { profile } from "../../data/profile"

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-plum/30 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-mist">
            Manishi<span className="text-rose">.dev</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-mist/55">
            {profile.title} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-5 text-mist/70">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-rose"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-rose"
          >
            <Mail size={20} />
          </a>
          <Link to="/blog" className="text-sm font-medium transition-colors hover:text-rose">
            Blog
          </Link>
        </div>
      </div>
      <div className="border-t border-plum/20 px-6 py-4 text-center text-xs text-mist/40 md:px-8">
        © {new Date().getFullYear()} Manishi Weerasekara
      </div>
    </footer>
  )
}
