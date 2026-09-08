import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Important Links & Official Resources",
  description:
    "Official government, tourism, and travel safety resources for travelers in Uttarakhand and India. Verified portals for NDMA, Uttarakhand Tourism, IRCTC, and Char Dham registration.",
  keywords: [
    "Uttarakhand tourism official link",
    "Char Dham registration portal",
    "NDMA India travel advisory",
    "IRCTC train booking",
    "Uttarakhand government portal",
    "Musafir Trails important links",
  ],
  alternates: {
    canonical: "/important-links",
  },
};

const importantLinks = [
  {
    name: "Char Dham Yatra Tourist Registration Portal",
    url: "https://registrationandtouristcare.uk.gov.in/",
    description:
      "Mandatory official government registration portal for Char Dham Yatra pilgrims visiting Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    tag: "Essential Pilgrimage Link",
  },
  {
    name: "Uttarakhand Tourism Development Board",
    url: "http://uttarakhandtourism.gov.in/",
    description:
      "Official state tourism guide for Uttarakhand — destinations, weather advisories, seasonal permits, and official guidelines.",
    tag: "State Tourism",
  },
  {
    name: "Ministry of Tourism, Government of India",
    url: "https://tourism.gov.in",
    description:
      "National tourism policies, Incredible India initiatives, safety guidelines, and national travel advisories.",
    tag: "National Tourism",
  },
  {
    name: "National Disaster Management Authority (NDMA)",
    url: "http://www.ndma.gov.in/en/",
    description:
      "Official portal for disaster preparedness, weather alerts, and emergency management in India.",
    tag: "Disaster Safety",
  },
  {
    name: "Government of Uttarakhand",
    url: "http://uk.gov.in/",
    description:
      "State government portal for citizen services, public notices, and official administrative updates.",
    tag: "State Portal",
  },
  {
    name: "Indian Railways – IRCTC",
    url: "https://www.irctc.co.in/",
    description:
      "Official Indian Railways portal for train schedules, PNR status, and railway bookings across India.",
    tag: "Railways & Transit",
  },
];

export default function ImportantLinksPage() {
  return (
    <main>
      <PageBanner
        image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=2000&q=85"
        tagline="Official Resources"
        heading="Important <em>Links & Information</em>"
        subtitle="Verified government portals, tourism boards, disaster advisories, and transit services for a safe journey across Uttarakhand."
      />

      <section style={{ background: "var(--cream)", padding: "6rem 4rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <ScrollReveal>
            <div className="stag">
              <span className="stagline"></span>
              <span className="stagtxt">Verified Portals</span>
            </div>
            <h2 className="sh" style={{ marginBottom: "1.2rem" }}>
              Official Government <em>Links</em>
            </h2>
            <p className="sp" style={{ marginBottom: "3rem" }}>
              For your safety and convenience, we have compiled the direct links
              to official government authorities, disaster management cells, and
              transit portals.
            </p>
          </ScrollReveal>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {importantLinks.map((link, i) => (
              <ScrollReveal key={i}>
                <div
                  style={{
                    background: "var(--warm)",
                    border: "1px solid rgba(201,168,76,.15)",
                    padding: "2rem 2.2rem",
                    borderRadius: "2px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    position: "relative",
                    transition: "all .35s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: ".62rem",
                          letterSpacing: ".15em",
                          textTransform: "uppercase",
                          color: "var(--gold-d)",
                          background: "rgba(201,168,76,.12)",
                          padding: ".2rem .7rem",
                          borderRadius: "1px",
                          fontWeight: 600,
                          display: "inline-block",
                          marginBottom: ".6rem",
                        }}
                      >
                        {link.tag}
                      </span>
                      <h3
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', serif",
                          fontSize: "1.3rem",
                          color: "var(--forest)",
                          marginBottom: ".4rem",
                        }}
                      >
                        {link.name}
                      </h3>
                      <p
                        style={{
                          fontSize: ".88rem",
                          color: "var(--muted)",
                          lineHeight: "1.65",
                          fontWeight: 300,
                          maxWidth: "750px",
                        }}
                      >
                        {link.description}
                      </p>
                    </div>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-g"
                      style={{
                        fontSize: ".72rem",
                        padding: ".75rem 1.4rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span>Visit Site</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div
              style={{
                marginTop: "4rem",
                padding: "1.8rem 2.2rem",
                background: "var(--forest)",
                borderLeft: "3px solid var(--gold)",
                borderRadius: "1px",
                color: "rgba(255,255,255,.7)",
                fontSize: ".83rem",
                lineHeight: "1.7",
                fontWeight: 300,
              }}
            >
              <strong style={{ color: "var(--gold-l)" }}>
                Disclaimer & Note:
              </strong>{" "}
              All external links direct to official government and public utility websites. The Musafir Trails is an independent travel agency providing curated tours, cab rentals, and itinerary management, and is not affiliated directly with government portals.
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
