"use client";

export default function Contact() {
  return (
    <section id="contact" className="csect">
      <div className="cinner">
        <div>
          <div className="stag">
            <div className="stagline"></div>
            <span className="stagtxt">Get in Touch</span>
          </div>
          <h2 className="sh">Start Your <em>Journey</em></h2>
          <p className="sp">Reach out to our travel experts to customize your itinerary or book your package.</p>
          
          <div className="cinfo-list">
            <a href="tel:+919876543210" className="cii">
              <span className="ciic">📞</span>
              <div>
                <div className="cilbl">Call Us</div>
                <div className="cival">+91 98765 43210</div>
              </div>
            </a>
            <a href="mailto:booking@explorecase.com" className="cii">
              <span className="ciic">✉️</span>
              <div>
                <div className="cilbl">Email Us</div>
                <div className="cival">booking@explorecase.com</div>
              </div>
            </a>
            <div className="cii">
              <span className="ciic">📍</span>
              <div>
                <div className="cilbl">Office</div>
                <div className="cival">Dehradun, Uttarakhand</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="cform" onSubmit={(e) => e.preventDefault()}>
            <div className="frow">
              <input type="text" className="fi" placeholder="Your Name" required />
              <input type="email" className="fi" placeholder="Your Email" required />
            </div>
            <input type="tel" className="fi" placeholder="Phone Number" required />
            <select className="fsel">
              <option value="">Select Package</option>
              <option value="chardham">Char Dham Yatra</option>
              <option value="dodham">Do Dham Yatra</option>
              <option value="taxi">Taxi Booking</option>
              <option value="other">Other Inquiry</option>
            </select>
            <textarea className="fta" placeholder="Your Message" required></textarea>
            <button type="submit" className="bgold" style={{ marginTop: "1rem", cursor: "pointer" }}>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
