import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import taxiData from "@/data/taxiData.json";

export default function TaxiPage() {
  const { banner, fleet, routes, howItWorks } = taxiData;

  return (
    <main>
      <PageBanner
        image={banner.image}
        tagline={banner.tagline}
        heading={banner.heading}
        subtitle={banner.subtitle}
      />

      {/* ═══ FLEET ═══ */}
      <section className="taxi-fleet">
        <ScrollReveal>
          <div className="stag">
            <span className="stagline"></span>
            <span className="stagtxt">{fleet.tagline}</span>
          </div>
          <h2 className="sh" dangerouslySetInnerHTML={{ __html: fleet.heading }} />
          <p className="sp">{fleet.description}</p>
        </ScrollReveal>
        <div className="fleet-grid">
          {fleet.vehicles.map((car, i) => (
            <ScrollReveal key={car.name} className={`fu${i % 3 === 1 ? "2" : i % 3 === 2 ? "3" : ""}`}>
              <div className="fcar">
                <div className="fcar-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="fcar-img" src={car.image} alt={car.name} />
                </div>
                <div className="fcar-body">
                  <h3 className="fcar-name">{car.name}</h3>
                  <div className="fcar-type">{car.type}</div>
                  <div className="fcar-specs">
                    {car.specs.map((spec, j) => (
                      <div className="fcar-spec" key={j}>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <div className="fcar-price">{car.price}</div>
                  <Link
                    href="/contact"
                    className="btn-g"
                    style={{ fontSize: ".74rem", padding: ".75rem 1.5rem" }}
                  >
                    <span>Book This Car</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* Custom vehicle card */}
          <ScrollReveal>
            <div className="fcar fcar-custom">
              <div style={{ fontSize: "2.8rem", marginBottom: "1.2rem" }}>🚐</div>
              <h3>Need a custom vehicle?</h3>
              <p>
                We also arrange buses, luxury SUVs, and specialty vehicles for
                specific high-altitude routes.
              </p>
              <Link
                href="/contact"
                className="btn-g"
                style={{ fontSize: ".74rem", padding: ".75rem 1.5rem" }}
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ROUTES ═══ */}
      <section className="taxi-routes">
        <ScrollReveal>
          <div className="stag">
            <span className="stagline" style={{ background: "var(--gold)" }}></span>
            <span className="stagtxt" style={{ color: "var(--gold)" }}>
              {routes.tagline}
            </span>
          </div>
          <h2 className="sh wh" dangerouslySetInnerHTML={{ __html: routes.heading }} />
        </ScrollReveal>
        <ScrollReveal>
          <div className="route-grid">
            {routes.items.map((route, i) => (
              <div className="rcard" key={i}>
                <div className="rcard-route">
                  {route.from} → {route.to}
                </div>
                <div className="rcard-km">{route.distance}</div>
                <div className="rcard-price">{route.price}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="taxi-how">
        <ScrollReveal>
          <div style={{ textAlign: "center" }}>
            <div className="stag" style={{ justifyContent: "center" }}>
              <span className="stagline"></span>
              <span className="stagtxt">{howItWorks.tagline}</span>
            </div>
            <h2
              className="sh"
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{ __html: howItWorks.heading }}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="how-steps">
            {howItWorks.steps.map((step) => (
              <div className="step" key={step.number}>
                <div className="step-num">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link href="/contact" className="btn-g">
            <span>Book a Taxi Now</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
