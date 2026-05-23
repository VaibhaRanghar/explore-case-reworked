"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import siteData from "@/data/siteData.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mnavOpen, setMnavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMnavOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const navClass = isHome ? (scrolled ? "on" : "") : "solid";

  return (
    <>
      <nav id="nav" className={navClass}>
        <Link href="/" className="logo-area">
          <div className="logo-placeholder">
            {/* Logo image will go here — drop your logo.png into /public/ */}
          </div>
          <div className="logo">
            Explore<span>Case</span>
          </div>
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
