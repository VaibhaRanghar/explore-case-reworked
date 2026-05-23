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
  title: "Explore Case | Uttarakhand Travel & Char Dham Yatra",
  description:
    "Expertly crafted Char Dham Yatra packages, adventure tours, and spiritual journeys across the divine landscapes of Uttarakhand. Dehradun's trusted travel specialists.",
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
