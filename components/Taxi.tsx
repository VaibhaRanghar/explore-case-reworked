export default function Taxi() {
  return (
    <section id="cars" className="cars">
      <div className="stag">
        <div className="stagline"></div>
        <span className="stagtxt">Comfortable Transfers</span>
      </div>
      <h2 className="sh">Premium <em>Fleet</em></h2>
      <p className="sp">We provide safe and comfortable transport across the challenging Himalayan terrain with our fleet of well-maintained vehicles and experienced drivers.</p>

      <div className="ctrack">
        {/* Innova */}
        <div className="ccar">
          <div className="cimgw">
            <div className="cimg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%" }}></div>
          </div>
          <div className="cinfo">
            <h4 className="cname">Toyota Innova Crysta</h4>
            <p className="ctype">Premium SUV • 6+1 Seater</p>
            <div className="cbtns">
              <button className="cbtn">Book</button>
            </div>
          </div>
        </div>

        {/* Tempo Traveller */}
        <div className="ccar">
          <div className="cimgw">
            <div className="cimg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%" }}></div>
          </div>
          <div className="cinfo">
            <h4 className="cname">Tempo Traveller</h4>
            <p className="ctype">Group Transport • 12/16 Seater</p>
            <div className="cbtns">
              <button className="cbtn">Book</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
