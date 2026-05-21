export default function Reviews() {
  return (
    <section id="reviews" className="revs">
      <div className="stag">
        <div className="stagline" style={{ background: "rgba(201, 168, 76, 0.5)" }}></div>
        <span className="stagtxt" style={{ color: "var(--gold-l)" }}>Traveler Stories</span>
      </div>
      <h2 className="sh" style={{ color: "#fff" }}>Words from our <em>Guests</em></h2>
      
      <div className="rgrid">
        <div className="rc">
          <div className="rstar">★★★★★</div>
          <p className="rtxt">&quot;An absolutely flawless Kedarnath trip. The VIP Darshan arrangement was perfect.&quot;</p>
          <div className="rauth">
            <strong>Amit Sharma</strong>
            <span>Delhi, India</span>
          </div>
        </div>
        <div className="rc">
          <div className="rstar">★★★★★</div>
          <p className="rtxt">&quot;Their local knowledge of the terrain made our Valley of Flowers trek unforgettable.&quot;</p>
          <div className="rauth">
            <strong>Sarah Jenkins</strong>
            <span>London, UK</span>
          </div>
        </div>
        <div className="rc">
          <div className="rstar">★★★★★</div>
          <p className="rtxt">&quot;Premium service all the way. The drivers were excellent and safe on the hills.&quot;</p>
          <div className="rauth">
            <strong>Priya Patel</strong>
            <span>Mumbai, India</span>
          </div>
        </div>
        <div className="rc">
          <div className="rstar">★★★★★</div>
          <p className="rtxt">&quot;Highly recommend for Char Dham. They took care of every single detail.&quot;</p>
          <div className="rauth">
            <strong>Rahul Verma</strong>
            <span>Bangalore, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
