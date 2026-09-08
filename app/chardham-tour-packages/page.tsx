import type { Metadata } from "next";
import CharDhamClient from "@/components/CharDhamClient";

export const metadata: Metadata = {
  title: "Char Dham Yatra Tour Packages 2026",
  description:
    "Book complete Char Dham Yatra tour packages 2026 for Yamunotri, Gangotri, Kedarnath, & Badrinath from Haridwar / Dehradun. Helicopter Yatra, luxury hotel stays, & expert guides.",
  keywords: [
    "Char Dham Yatra tour packages 2026",
    "Kedarnath tour package",
    "Badrinath Yatra package",
    "Char Dham helicopter booking",
    "Yamunotri Gangotri Yatra package",
    "Char Dham taxi package Haridwar Dehradun",
    "Luxury Char Dham Yatra",
    "Kedarnath Badrinath Do Dham package",
  ],
  alternates: {
    canonical: "/chardham-tour-packages",
  },
  openGraph: {
    title: "Char Dham Yatra Tour Packages 2026 | Musafir Trails",
    description:
      "Book complete Char Dham Yatra 2026 packages — Yamunotri, Gangotri, Kedarnath, Badrinath, & Helicopter Yatra.",
    url: "https://www.themusafirtrails.com/chardham-tour-packages",
    siteName: "The Musafir Trails",
  },
};

export default function CharDhamPage() {
  return <CharDhamClient />;
}
