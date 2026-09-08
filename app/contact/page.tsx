import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Book Tours & Taxi Services",
  description:
    "Get in touch with The Musafir Trails team in Dehradun. Call +91 7536061516 or email info@themusafirtrails.com to book Char Dham packages, taxis, or custom tours.",
  keywords: [
    "Contact Musafir Trails",
    "Dehradun travel agency contact number",
    "Book Char Dham package phone number",
    "Taxi booking Dehradun contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | The Musafir Trails - Dehradun",
    description:
      "Get in touch with The Musafir Trails team to book Char Dham packages, custom tours, or taxi services in Dehradun.",
    url: "https://www.themusafirtrails.com/contact",
    siteName: "The Musafir Trails",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
