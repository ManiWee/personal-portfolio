import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Experience from "../components/home/Experience"
import Projects from "../components/home/Projects"
import Skills from "../components/home/Skills"
import Contact from "../components/home/Contact"

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
