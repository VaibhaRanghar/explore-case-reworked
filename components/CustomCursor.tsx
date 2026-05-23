"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    if (curRef.current) {
      curRef.current.style.left = e.clientX + "px";
      curRef.current.style.top = e.clientY + "px";
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    let raf: number;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Hover effects on interactive elements
    const handleEnter = () => {
      if (curRef.current) {
        curRef.current.style.width = "16px";
        curRef.current.style.height = "16px";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "rgba(201,168,76,.9)";
      }
    };
    const handleLeave = () => {
      if (curRef.current) {
        curRef.current.style.width = "8px";
        curRef.current.style.height = "8px";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(201,168,76,.6)";
      }
    };

    const selectors = "a,button,.tc,.fcar,.val,.wc,.dham,.rv,.ofc,.step,.rcard,.tcard,.tm,.pkg,.inc,.si,.ftab";
    const addListeners = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };
    // Add listeners initially and on DOM changes
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [onMouseMove]);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="ring" ref={ringRef}></div>
    </>
  );
}
