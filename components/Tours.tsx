import Link from "next/link";

export default function Tours() {
  return (
    <section id="tours" className="tours">
      <div className="thead">
        <div>
          <div className="stag">
            <div className="stagline"></div>
            <span className="stagtxt">Curated Packages</span>
          </div>
          <h2 className="sh">Explore <em>Our Tours</em></h2>
        </div>
        <Link href="#contact" className="bghost" style={{ color: "var(--forest)", borderColor: "var(--forest)" }}>View All</Link>
      </div>

      <div className="tgrid">
        <div className="tc">
          <div className="timg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%" }}></div>
          <div className="tov">
            <span className="tbadge">12 Days</span>
            <h3 className="tname">Complete Char Dham Yatra</h3>
            <p className="tdesc">The ultimate spiritual journey covering all four sacred shrines. Includes luxury accommodation, transfers, and VIP Darshan.</p>
            <Link href="#contact" className="tlink">
              Book Package
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="tc">
          <div className="timg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%" }}></div>
          <div className="tov">
            <span className="tbadge">6 Days</span>
            <h3 className="tname">Do Dham Yatra</h3>
            <p className="tdesc">Kedarnath and Badrinath journey.</p>
            <Link href="#contact" className="tlink">Details &rarr;</Link>
          </div>
        </div>

        <div className="tc">
          <div className="timg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598322313627-7798991a0c4f?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%" }}></div>
          <div className="tov">
            <span className="tbadge">4 Days</span>
            <h3 className="tname">Valley of Flowers</h3>
            <p className="tdesc">Explore the UNESCO heritage site.</p>
            <Link href="#contact" className="tlink">Details &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
