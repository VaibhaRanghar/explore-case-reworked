"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className={isScrolled ? "on" : ""}>
      <Link href="#" className="logo">
        Explore<span>Case</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#cdsect">Char Dham</Link></li>
        <li><Link href="#tours">Tours</Link></li>
        <li><Link href="#cars">Taxi</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="#contact" className="ncta">Book Now</Link></li>
      </ul>
    </nav>
  );
}
