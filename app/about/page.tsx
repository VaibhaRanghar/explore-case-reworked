import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Uttarakhand Travel Specialists",
  description:
    "Learn about The Musafir Trails — Dehradun's premier travel agency with years of experience crafting authentic Char Dham Yatras, Himalayan treks, and luxury cab services.",
  keywords: [
    "About Musafir Trails",
    "Best travel agency Dehradun",
    "Uttarakhand tour operators",
    "Char Dham travel experts",
    "Dehradun travel specialists",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | The Musafir Trails - Uttarakhand Travel Specialists",
    description:
      "Learn about The Musafir Trails — Dehradun's premier travel agency dedicated to seamless Himalayan journeys.",
    url: "https://www.themusafirtrails.com/about",
    siteName: "The Musafir Trails",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
