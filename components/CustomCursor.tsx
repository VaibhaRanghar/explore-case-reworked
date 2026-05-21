"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth <= 900) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;

        // Slight delay for the ring
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.left = `${e.clientX}px`;
            ringRef.current.style.top = `${e.clientY}px`;
          }
        }, 50);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div id="cur" ref={cursorRef}></div>
      <div id="ring" ref={ringRef}></div>
    </>
  );
}
