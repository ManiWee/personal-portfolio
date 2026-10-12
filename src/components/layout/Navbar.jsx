import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { to: "/#about", label: "About", hash: "about" },
  { to: "/#experience", label: "Experience", hash: "experience" },
  { to: "/#projects", label: "Projects", hash: "projects" },
  { to: "/blog", label: "Blog" },
  { to: "/#contact", label: "Contact", hash: "contact" },
]

function scrollToHash(hash) {
  if (!hash) return
  const el = document.getElementById(hash)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNav = (link) => {
    setOpen(false)
    if (link.hash) {
      if (location.pathname !== "/") {
        // Navigate home first; Home page will pick up hash on load
        return
      }
      requestAnimationFrame(() => scrollToHash(link.hash))
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-ink/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight text-mist md:text-2xl"
          onClick={() => setOpen(false)}
        >
          Manishi
          <span className="text-rose">.dev</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.hash ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNav(link)}
                className="text-sm font-medium text-mist/70 transition-colors hover:text-mist"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-rose" : "text-mist/70 hover:text-mist"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-mist md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-plum/40 bg-navy/95 px-6 py-6 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.label}>
                  {link.hash ? (
                    <Link
                      to={link.to}
                      onClick={() => handleNav(link)}
                      className="font-display text-lg text-mist/90"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `font-display text-lg ${isActive ? "text-rose" : "text-mist/90"}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
