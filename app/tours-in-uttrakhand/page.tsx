import type { Metadata } from "next";
import ToursClient from "@/components/ToursClient";

export const metadata: Metadata = {
  title: "Uttarakhand Tour Packages & Adventure Treks",
  description:
    "Explore top Uttarakhand tour packages — Valley of Flowers trek, Chopta Tungnath, Rishikesh rafting, Jim Corbett jungle safari, Auli skiing, & hill station tour packages.",
  keywords: [
    "Uttarakhand tour packages",
    "Valley of Flowers trek package",
    "Chopta Tungnath trek package",
    "Rishikesh rafting package",
    "Jim Corbett safari booking",
    "Auli skiing tour package",
    "Mussoorie Nainital hill station tour",
    "Treks in Uttarakhand",
  ],
  alternates: {
    canonical: "/tours-in-uttrakhand",
  },
  openGraph: {
    title: "Uttarakhand Tour Packages & Treks | Musafir Trails",
    description:
      "Explore top Uttarakhand adventure tour packages — Valley of Flowers, Rishikesh, Chopta, Corbett Safari, & Auli.",
    url: "https://www.themusafirtrails.com/tours-in-uttrakhand",
    siteName: "The Musafir Trails",
  },
};

export default function ToursPage() {
  return <ToursClient />;
}
