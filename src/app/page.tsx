"use client"
import { useState, useEffect } from "react"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Splash from "@/components/Splash"
import Who from "@/components/Who"

export default function HomePage() {
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show nav if scrolling up OR near the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Top Menu */}
      <nav
        className={`fixed bg-[#faeaae] top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-center gap-8 py-4 font-sirenia">
          <a href="#wat" className="hover:underline">
            Wat
          </a>
          <a href="#wie" className="hover:underline">
            Over mij
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero / Splash */}
      <Splash />

      {/* Wat + Voor wie section */}
      <About />

      {/* Wie ben ik section */}
      <Who />

      {/* Contact */}
      <Footer />
    </>
  )
}
