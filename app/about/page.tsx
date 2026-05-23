"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import aboutData from "@/data/aboutData.json";

export default function AboutPage() {
  const imgRef = useRef<HTMLImageElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      imgRef.current?.classList.add("scaled");
      tagRef.current?.classList.add("vis");
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const { banner, story, values, milestones } = aboutData;

  return (
    <main>
      <PageBanner
        image={banner.image}
        tagline={banner.tagline}
        heading={banner.heading}
        subtitle={banner.subtitle}
      />

      {/* ═══ STORY ═══ */}
      <div className="about-story">
        <ScrollReveal className="as-img fl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={imgRef} src={story.image} alt="Uttarakhand" />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg,rgba(10,25,15,.2),transparent)",
            }}
          ></div>
          <div className="as-img-tag" ref={tagRef}>
            {story.imageTag}
          </div>
        </ScrollReveal>
        <ScrollReveal className="as-con fr">
          <div className="stag">
            <span className="stagline"></span>
            <span className="stagtxt">{story.tagline}</span>
          </div>
          <h2 className="sh" dangerouslySetInnerHTML={{ __html: story.heading }} />
          {story.paragraphs.map((p, i) => (
            <p key={i} className="sp" style={i > 0 ? { marginTop: "1rem" } : undefined}>
              {p}
            </p>
          ))}
          <blockquote>&ldquo;{story.blockquote}&rdquo;</blockquote>
          <Link href="/contact" className="btn-g" style={{ width: "fit-content", marginTop: "1rem" }}>
            <span>Get in Touch</span>
          </Link>
        </ScrollReveal>
      </div>

      {/* ═══ VALUES ═══ */}
      <section className="values-sect">
        <ScrollReveal>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div className="stag" style={{ justifyContent: "center" }}>
              <span className="stagline" style={{ background: "var(--gold)" }}></span>
              <span className="stagtxt" style={{ color: "var(--gold)" }}>
                {values.tagline}
              </span>
            </div>
            <h2
              className="sh wh"
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{ __html: values.heading }}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="values-grid">
            {values.items.map((val, i) => (
              <div className="val" key={i}>
                <span className="val-icon">{val.icon}</span>
                <h3 className="val-title">{val.title}</h3>
                <p className="val-text">{val.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ MILESTONES ═══ */}
      <section className="milestones">
        <ScrollReveal>
          <div className="stag">
            <span className="stagline"></span>
            <span className="stagtxt">{milestones.tagline}</span>
          </div>
          <h2 className="sh" dangerouslySetInnerHTML={{ __html: milestones.heading }} />
        </ScrollReveal>
        <ScrollReveal>
          <div className="timeline">
            {milestones.items.map((item, i) => (
              <div className="tli" key={i}>
                <div className="tli-year">{item.year}</div>
                <h3 className="tli-title">{item.title}</h3>
                <p className="tli-text">{item.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
