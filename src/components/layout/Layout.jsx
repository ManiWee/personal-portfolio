import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="ambient-bg grain min-h-screen">
      <Navbar />
      <main className="relative z-[1]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
