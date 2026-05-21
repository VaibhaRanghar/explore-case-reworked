import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";
import Stats from "@/components/Stats";
import About from "@/components/About";
import CharDham from "@/components/CharDham";
import Tours from "@/components/Tours";
import Ticker from "@/components/Ticker";
import Taxi from "@/components/Taxi";
import Counts from "@/components/Counts";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Custom Cursor Component handles the cursor animation globally */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <Stats />
      
      {/* About Section */}
      <About />
      
      {/* Char Dham Section */}
      <CharDham />
      
      {/* Tours Packages */}
      <Tours />
      
      {/* Ticker Animation */}
      <Ticker />
      
      {/* Taxi/Cars */}
      <Taxi />
      
      {/* Counts */}
      <Counts />
      
      {/* Reviews */}
      <Reviews />
      
      {/* Contact */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
