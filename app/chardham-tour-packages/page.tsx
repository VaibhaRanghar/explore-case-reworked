"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import chardhamData from "@/data/chardhamData.json";

export default function CharDhamPage() {
  const [selectedDham, setSelectedDham] = useState(0);
  const [imgFading, setImgFading] = useState(false);

  const { banner, intro, dhams, packages, inclusions } = chardhamData;
  const dham = dhams[selectedDham];

  const handleSelectDham = (i: number) => {
    if (i === selectedDham) return;
    setImgFading(true);
    setTimeout(() => {
      setSelectedDham(i);
      setImgFading(false);
    }, 150);
  };

  return (
    <main>
      <PageBanner
        image={banner.image}
        tagline={banner.tagline}
        heading={banner.heading}
        subtitle={banner.subtitle}
      />

      {/* ═══ INTRO ═══ */}
      <section className="cd-intro">
        <div
          className="cd-orb"
          style={{
            top: "-180px",
            right: "-180px",
            width: 550,
            height: 550,
            animationDuration: "55s",
          }}
        ></div>
        <div
          className="cd-orb"
          style={{
            bottom: "-130px",
            left: "-130px",
            width: 380,
            height: 380,
            animationDuration: "70s",
            animationDirection: "reverse",
          }}
        ></div>
        <div className="cd-intro-grid">
          <ScrollReveal className="fl">
            <div className="stag">
              <span className="stagline" style={{ background: "var(--gold)" }}></span>
              <span className="stagtxt" style={{ color: "var(--gold)" }}>
                {intro.tagline}
              </span>
            </div>
            <h2 className="sh wh" dangerouslySetInnerHTML={{ __html: intro.heading }} />
            {intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className="sp wh"
                style={i === 0 ? { margin: "1rem 0" } : { marginBottom: "2rem" }}
              >
                {p}
              </p>
            ))}
            <Link href="/contact" className="btn-g">
              <span>Plan Your Yatra</span>
              <span>→</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal className="fr">
            <p
              style={{
                fontSize: ".64rem",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.28)",
                marginBottom: "1rem",
              }}
            >
              Select a Dham to explore
            </p>
            <div className="cd-dhams">
              {dhams.map((d, i) => (
                <div
                  key={i}
                  className={`dham ${selectedDham === i ? "sel" : ""}`}
                  onClick={() => handleSelectDham(i)}
                >
                  <div className="dham-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="dham-name">{d.name}</div>
                  <div className="dham-loc">{d.location}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ DHAM DETAIL ═══ */}
      <div className="dham-detail">
        <ScrollReveal>
          <div className="dham-detail-grid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="dham-detail-img"
              src={dham.image}
              alt={dham.name}
              style={{
                opacity: imgFading ? 0 : 1,
                transform: imgFading ? "scale(1.04)" : "scale(1)",
                transition: "opacity .5s ease, transform .6s ease",
              }}
            />
            <div>
              <div className="stag">
                <span className="stagline" style={{ background: "var(--gold)" }}></span>
                <span className="stagtxt" style={{ color: "var(--gold)" }}>
                  {dham.tag}
                </span>
              </div>
              <h2 className="sh wh">
                <em>{dham.name}</em>
              </h2>
              <p className="sp wh" style={{ margin: "1rem 0 1.8rem" }}>
                {dham.description}
              </p>
              <div className="dham-facts">
                <div className="df">
                  <div className="df-lbl">Altitude</div>
                  <div className="df-val">{dham.facts.altitude}</div>
                </div>
                <div className="df">
                  <div className="df-lbl">District</div>
                  <div className="df-val">{dham.facts.district}</div>
                </div>
                <div className="df">
                  <div className="df-lbl">Best Season</div>
                  <div className="df-val">{dham.facts.season}</div>
                </div>
                <div className="df">
                  <div className="df-lbl">Trek Distance</div>
                  <div className="df-val">{dham.facts.trek}</div>
                </div>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/contact" className="btn-g">
                  <span>Book This Dham</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ═══ PACKAGES ═══ */}
      <section className="cd-pkgs">
        <ScrollReveal>
          <div className="stag">
            <span className="stagline"></span>
            <span className="stagtxt">{packages.tagline}</span>
          </div>
          <h2 className="sh" dangerouslySetInnerHTML={{ __html: packages.heading }} />
        </ScrollReveal>
        <ScrollReveal>
          <div className="pkg-grid">
            {packages.items.map((pkg, i) => (
              <div
                key={i}
                className={`pkg ${pkg.featured ? "pkg-featured" : ""}`}
              >
                {pkg.featured && pkg.featuredLabel && (
                  <div className="pkg-featured-label">{pkg.featuredLabel}</div>
                )}
                <div className="pkg-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="pkg-img" src={pkg.image} alt={pkg.name} />
                </div>
                <div className="pkg-body">
                  <span
                    className="pkg-tag"
                    style={
                      pkg.featured
                        ? { background: "rgba(201,168,76,.2)", color: "var(--gold-d)" }
                        : undefined
                    }
                  >
                    {pkg.tag}
                  </span>
                  <h3 className="pkg-name">{pkg.name}</h3>
                  <p className="pkg-desc">{pkg.description}</p>
                  <div className="pkg-meta">
                    <span className="pkg-dur">⏱ {pkg.duration}</span>
                    <span className="pkg-price">{pkg.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ INCLUSIONS ═══ */}
      <section className="cd-include">
        <ScrollReveal>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div className="stag" style={{ justifyContent: "center" }}>
              <span className="stagline" style={{ background: "var(--gold)" }}></span>
              <span className="stagtxt" style={{ color: "var(--gold)" }}>
                {inclusions.tagline}
              </span>
            </div>
            <h2
              className="sh wh"
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{ __html: inclusions.heading }}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="inc-grid">
            {inclusions.items.map((inc, i) => (
              <div className="inc" key={i}>
                <span className="inc-icon">{inc.icon}</span>
                <h3 className="inc-title">{inc.title}</h3>
                <p className="inc-text">{inc.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
