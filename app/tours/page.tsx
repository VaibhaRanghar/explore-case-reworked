"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import toursData from "@/data/toursData.json";

export default function ToursPage() {
  const [activeFilter, setActiveFilter] = useState("All Tours");
  const { banner, filterTabs, tours, customCta } = toursData;

  const filteredTours = tours.filter((tour) => {
    if (activeFilter === "All Tours") return true;
    return tour.categories.some(
      (c) => c.toLowerCase() === activeFilter.toLowerCase().replace("ing", "")
    ) || tour.categories.some(
      (c) => c.toLowerCase() === activeFilter.toLowerCase()
    );
  });

  const handleFilter = (tab: string) => {
    setActiveFilter(tab);
  };

  return (
    <main>
      <PageBanner
        image={banner.image}
        tagline={banner.tagline}
        heading={banner.heading}
        subtitle={banner.subtitle}
      />

      {/* ═══ FILTER TABS ═══ */}
      <div className="tours-filter">
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`ftab ${activeFilter === tab ? "on" : ""}`}
              onClick={() => handleFilter(tab)}
            >
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ═══ TOUR CARDS ═══ */}
      <section className="tours-list">
        <div className="tl-grid">
          {filteredTours.map((tour, i) => (
            <ScrollReveal key={tour.name} className={`fu${i % 3 === 1 ? "2" : i % 3 === 2 ? "3" : ""}`}>
              <div className="tcard">
                <div className="tcard-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="tcard-img" src={tour.image} alt={tour.name} />
                  <span className="tcard-badge">{tour.badge}</span>
                  <span className="tcard-diff">{tour.difficulty}</span>
                </div>
                <div className="tcard-body">
                  <h3 className="tcard-name">{tour.name}</h3>
                  <p className="tcard-desc">{tour.description}</p>
                  <div className="tcard-meta">
                    <span>⏱ {tour.duration}</span>
                    <span>
                      {tour.elevation
                        ? `🏔 ${tour.elevation}`
                        : `${tour.elevationIcon} ${tour.elevationLabel}`}
                    </span>
                    <span>📍 {tour.location}</span>
                    <span style={{ color: "var(--gold-d)", fontWeight: 500 }}>
                      {tour.price}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ CUSTOM CTA ═══ */}
      <section className="custom-cta">
        <ScrollReveal>
          <div className="stag" style={{ justifyContent: "center" }}>
            <span className="stagline" style={{ background: "var(--gold)" }}></span>
            <span className="stagtxt" style={{ color: "var(--gold)" }}>
              {customCta.tagline}
            </span>
          </div>
          <h2
            className="sh wh"
            style={{ textAlign: "center", marginBottom: "1rem" }}
            dangerouslySetInnerHTML={{ __html: customCta.heading }}
          />
          <p className="sp wh" style={{ color: "rgba(255,255,255,.5)", maxWidth: 490, margin: "0 auto 2.5rem", lineHeight: "1.78", textAlign: "center" }}>
            {customCta.description}
          </p>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-g">
              <span>Request Custom Package</span>
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
