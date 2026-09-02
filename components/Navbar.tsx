"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import siteData from "@/data/siteData.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mnavOpen, setMnavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setScrolled(y > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMnavOpen(false);
  }, [pathname]);

  const isHome = pathname === "/" || pathname === "/home";
  const navClass = isHome ? (scrolled ? "on" : "") : "solid";

  // Calculate smooth scroll progress for homepage logo transition (0 = top, 1 = scrolled)
  const scrollProgress = isHome ? Math.min(Math.max(scrollY / 80, 0), 1) : 1;

  return (
    <>
      {/* Homepage Standalone Oversized Logo */}
      {isHome && (
        <Link
          href="/"
          className="standalone-logo-wrapper"
          style={{
            opacity: 1 - scrollProgress,
            transform: `translateY(${-scrollProgress * 45}px) scale(${1 - scrollProgress * 0.12})`,
            pointerEvents: scrollProgress > 0.8 ? "none" : "auto",
          }}
          aria-label="Musafir Trails Home"
        >
          <img
            src="/musafir_logo-02.png"
            alt="Musafir Trails Logo"
            className="standalone-logo-img"
          />
        </Link>
      )}

      <nav id="nav" className={navClass}>
        <Link
          href="/"
          className="logo-area"
          style={{
            opacity: isHome ? scrollProgress : 1,
            transform: isHome ? `translateY(${(1 - scrollProgress) * 6}px)` : "none",
            pointerEvents: isHome && scrollProgress < 0.2 ? "none" : "auto",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
          aria-label="Musafir Trails"
        >
          <img
            src="/musafir_logo-04.png"
            alt="Musafir Trails"
            className="nav-logo-extended"
          />
        </Link>
        <ul className="nav-links" id="navlinks">
          {siteData.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="ncta">
              Book Now
            </Link>
          </li>
        </ul>
        <button
          className={`ham ${mnavOpen ? "open" : ""}`}
          onClick={() => setMnavOpen(!mnavOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Nav */}
      <div className={`mnav ${mnavOpen ? "open" : ""}`} id="mnav">
        {siteData.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMnavOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
