export default function About() {
  return (
    <section id="about" className="about">
      <div className="aiwrap">
        {/* Placeholder background image, replace with exact URL if known */}
        <div 
          className="aimg iv" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%"
          }}
        ></div>
        <div className="aiov"></div>
        <div className="atag">Premium Travel</div>
      </div>
      <div className="acon">
        <div className="stag">
          <div className="stagline"></div>
          <span className="stagtxt">About Explore Case</span>
        </div>
        <h2 className="sh">Curating <em>Divine</em> Experiences</h2>
        <p className="sp">
          We are Uttarakhand&apos;s premier travel specialists. Whether it is the spiritual calling of the Char Dham Yatra, 
          or an adventurous expedition deep into the Himalayas, we ensure your journey is seamless, safe, and profoundly moving.
        </p>
        <div className="afeat">
          <div className="af">
            <span className="afic">🏔️</span>
            <h3 className="aft">Local Expertise</h3>
            <p className="afp">Deep knowledge of the Himalayan terrain and culture.</p>
          </div>
          <div className="af">
            <span className="afic">⭐</span>
            <h3 className="aft">Premium Service</h3>
            <p className="afp">Luxury stays and dedicated 24/7 on-ground support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
