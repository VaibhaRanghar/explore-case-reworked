import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hbg" id="hbg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=2000&q=85')" }}></div>
      <div className="hov"></div>
      <div className="hpar" id="hpar"></div>
      <div className="hcon">
        <div className="eyebrow">
          <div className="eline"></div>
          <span className="etxt">Uttarakhand&apos;s Trusted Travel Specialist</span>
        </div>
        <h1>
          <span className="hl">Discover</span>
          <span className="hl">the <em>Sacred</em></span>
          <span className="hl">Himalayas</span>
        </h1>
        <p className="hsub">
          Crafted Char Dham pilgrimages, mountain adventures, and spiritual journeys. Every detail handled — you just experience the divine.
        </p>
        <div className="hact">
          <Link href="#tours" className="bgold">
            <span>Explore Packages</span>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="#cdsect" className="bghost">
            Char Dham Yatra
          </Link>
        </div>
      </div>
      <div className="scrl">
        <div className="scrl-line"></div>
        <span>Scroll</span>
      </div>
    </div>
  );
}
