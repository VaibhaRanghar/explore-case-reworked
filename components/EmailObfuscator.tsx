"use client";

import { useEffect, useState } from "react";

interface EmailObfuscatorProps {
  email?: string;
  className?: string;
}

export default function EmailObfuscator({
  email = "info@themusafirtrails.com",
  className = "",
}: EmailObfuscatorProps) {
  const [displayEmail, setDisplayEmail] = useState<string>("");

  useEffect(() => {
    // Obfuscate email on client load to prevent scraping bots from parsing plain text in static HTML
    setDisplayEmail(email);
  }, [email]);

  if (!displayEmail) {
    return <span className={className}>info [at] themusafirtrails.com</span>;
  }

  return (
    <a
      href={`mailto:${displayEmail}`}
      className={className}
      rel="noopener noreferrer"
    >
      {displayEmail}
    </a>
  );
}
