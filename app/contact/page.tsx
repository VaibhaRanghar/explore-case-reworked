"use client";

import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import contactData from "@/data/contactData.json";
import siteData from "@/data/siteData.json";

export default function ContactPage() {
  const { banner, serviceOptions, offices, faq } = contactData;
  const { phone, email, address, hours, socialLinks, whatsappNumber } = siteData;

  const handleSubmit = () => {
    alert("Thank you! We will contact you within 24 hours.");
  };

  return (
    <main>
      <PageBanner
        image={banner.image}
        tagline={banner.tagline}
        heading={banner.heading}
        subtitle={banner.subtitle}
      />

      {/* ═══ CONTACT FORM + INFO ═══ */}
      <div className="contact-main">
        <ScrollReveal className="c-left fl">
          <div className="stag">
            <span className="stagline" style={{ background: "var(--gold)" }}></span>
            <span className="stagtxt" style={{ color: "var(--gold)" }}>
              Reach Us
            </span>
          </div>
          <h2 className="sh wh" style={{ marginBottom: ".6rem" }}>
            We&apos;re here to
            <br />
            <em>help you travel</em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.48)",
              fontSize: ".9rem",
              lineHeight: "1.75",
              fontWeight: 300,
              maxWidth: 380,
            }}
          >
            Whether you&apos;re planning a Char Dham Yatra, an adventure trek, or
            need a cab — our team is available 7 days a week.
          </p>
          <div className="c-info-items">
            <div className="cii">
              <div className="cii-icon">📞</div>
              <div>
                <div className="cii-lbl">Phone</div>
                <div className="cii-val">{phone.join(" / ")}</div>
              </div>
            </div>
            <div className="cii">
              <div className="cii-icon">✉️</div>
              <div>
                <div className="cii-lbl">Email</div>
                <div className="cii-val">{email}</div>
              </div>
            </div>
            <div className="cii">
              <div className="cii-icon">📍</div>
              <div>
                <div className="cii-lbl">Address</div>
                <div className="cii-val">{address}</div>
              </div>
            </div>
            <div className="cii">
              <div className="cii-icon">🕐</div>
              <div>
                <div className="cii-lbl">Hours</div>
                <div className="cii-val">{hours}</div>
              </div>
            </div>
          </div>
          <div className="c-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="csoc"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="c-right fr">
          <div className="stag">
            <span className="stagline"></span>
            <span className="stagtxt">Send a Message</span>
          </div>
          <h2 className="sh" style={{ fontSize: "2rem" }}>
            Book or <em>Enquire</em>
          </h2>
          <div className="fform">
            <div className="frow">
              <input className="fi" type="text" placeholder="Your Full Name" />
              <input className="fi" type="tel" placeholder="Phone Number" />
            </div>
            <input className="fi" type="email" placeholder="Email Address" />
            <select className="fsel" defaultValue="">
              <option value="" disabled>
                Select Service
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <div className="frow">
              <input
                className="fi"
                type="text"
                placeholder="Travel Date (approx.)"
              />
              <input
                className="fi"
                type="number"
                placeholder="No. of Travelers"
              />
            </div>
            <textarea
              className="fta"
              placeholder="Tell us about your trip..."
            ></textarea>
            <button className="fsub" onClick={handleSubmit}>
              <span>Send Enquiry</span>
            </button>
            <a
              href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hello%2C+I+would+like+to+book+a+package!`}
              target="_blank"
              rel="noopener noreferrer"
              className="fwa"
            >
              <span>💬 Chat on WhatsApp Instead</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* ═══ OFFICES ═══ */}
      <section className="offices">
        <ScrollReveal>
          <div className="stag">
            <span className="stagline"></span>
            <span className="stagtxt">{offices.tagline}</span>
          </div>
          <h2
            className="sh"
            dangerouslySetInnerHTML={{ __html: offices.heading }}
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="offices-grid">
            {offices.items.map((ofc, i) => (
              <div className="ofc" key={i}>
                <div className="ofc-city">{ofc.city}</div>
                <div className="ofc-type">{ofc.type}</div>
                <p className="ofc-detail">{ofc.detail}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ background: "var(--forest)", padding: "7rem 4rem" }}>
        <ScrollReveal>
          <div className="stag">
            <span className="stagline" style={{ background: "var(--gold)" }}></span>
            <span className="stagtxt" style={{ color: "var(--gold)" }}>
              {faq.tagline}
            </span>
          </div>
          <h2
            className="sh wh"
            style={{ marginBottom: "3rem" }}
            dangerouslySetInnerHTML={{ __html: faq.heading }}
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-grid">
            {faq.items.map((item, i) => (
              <div className="faq-item" key={i}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
