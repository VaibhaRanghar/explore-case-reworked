export default function CharDham() {
  return (
    <section id="cdsect" className="cdsect">
      <div className="cdg">
        <div>
          <div className="stag">
            <div className="stagline"></div>
            <span className="stagtxt">The Ultimate Pilgrimage</span>
          </div>
          <h2 className="sh" style={{ color: "#fff" }}>
            The <em>Sacred</em> Char Dham
          </h2>
          <p className="sp" style={{ color: "rgba(255,255,255,0.7)" }}>
            Embark on a spiritual journey to the four holiest shrines nestled high in the Garhwal Himalayas. A path of purification and devotion.
          </p>
          <div className="cdfeats">
            <div className="cdf">
              <div className="cddot"></div>
              <p className="cdft"><strong>Yamunotri</strong> The source of the Yamuna River.</p>
            </div>
            <div className="cdf">
              <div className="cddot"></div>
              <p className="cdft"><strong>Gangotri</strong> The origin of the sacred Ganges.</p>
            </div>
            <div className="cdf">
              <div className="cddot"></div>
              <p className="cdft"><strong>Kedarnath</strong> The revered shrine of Lord Shiva.</p>
            </div>
            <div className="cdf">
              <div className="cddot"></div>
              <p className="cdft"><strong>Badrinath</strong> The sacred abode of Lord Vishnu.</p>
            </div>
          </div>
        </div>
        <div className="cdr">
          <div className="cdcard">
            {/* Replace with exact images if needed */}
            <div className="cimg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80')", width: "100%", height: "100%", backgroundSize: "cover" }}></div>
            <div className="cdov">
              <div>
                <h4 className="cdname">Kedarnath</h4>
                <span className="cdsub">11,755 ft</span>
              </div>
            </div>
          </div>
          <div className="cdcard">
            <div className="cimg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598322313627-7798991a0c4f?w=800&q=80')", width: "100%", height: "100%", backgroundSize: "cover" }}></div>
            <div className="cdov">
              <div>
                <h4 className="cdname">Badrinath</h4>
                <span className="cdsub">10,279 ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
