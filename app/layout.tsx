import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import WhatsAppFab from "@/components/WhatsAppFab";
import BackToTop from "@/components/BackToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themusafirtrails.com"),
  title: {
    default: "The Musafir Trails | Uttarakhand Travel & Char Dham Yatra",
    template: "%s | The Musafir Trails",
  },
  description:
    "Expertly crafted Char Dham Yatra packages, adventure tours, and spiritual journeys across the divine landscapes of Uttarakhand. Dehradun's trusted travel specialists.",
  keywords: [
    "Char Dham Yatra package 2026",
    "Uttarakhand tour packages",
    "Dehradun travel agency",
    "Kedarnath Badrinath tour package",
    "Taxi service in Dehradun",
    "Musafir Trails",
    "Rishikesh rafting package",
    "Chopta Tungnath trek",
    "Char Dham helicopter booking",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Musafir Trails | Uttarakhand Travel & Char Dham Yatra",
    description:
      "Expertly crafted Char Dham Yatra packages, adventure tours, and spiritual journeys across Uttarakhand.",
    url: "https://www.themusafirtrails.com",
    siteName: "The Musafir Trails",
    images: [
      {
        url: "/musafir_logo-02.png",
        width: 1200,
        height: 630,
        alt: "The Musafir Trails Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Musafir Trails | Uttarakhand Travel & Char Dham Yatra",
    description:
      "Expertly crafted Char Dham Yatra packages, adventure tours, and spiritual journeys across Uttarakhand.",
    images: ["/musafir_logo-02.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/musafir_logo-02.png", sizes: "192x192", type: "image/png" },
      { url: "/musafir_logo-02.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/musafir_logo-02.png",
    apple: "/musafir_logo-02.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <Loader />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFab />
        <BackToTop />
      </body>
    </html>
  );
}
