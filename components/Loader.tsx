"use client";

import { useEffect, useState } from "react";
import siteData from "@/data/siteData.json";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingVisible, setGreetingVisible] = useState(true);

  const greetings = siteData.loaderGreetings;

  useEffect(() => {
    // Cycle through greetings
    const interval = setInterval(() => {
      setGreetingVisible(false);
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setGreetingVisible(true);
      }, 300);
    }, 450);

    // Dismiss loader after animation completes
    const timer = setTimeout(() => {
      setDone(true);
      clearInterval(interval);
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [greetings.length]);

  return (
    <div id="loader" className={done ? "done" : ""}>
      {/* Greetings at center of screen */}
      <div className="loader-greetings">
        <div className={`greeting-text ${greetingVisible ? "visible" : ""}`}>
          {greetings[greetingIndex]}
        </div>
      </div>

      {/* ExploreCase at bottom center */}
      <div className="loader-logo">
        Explore<span>Case</span>
      </div>
      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>
      <div className="loader-txt">Loading your journey...</div>
    </div>
  );
}
