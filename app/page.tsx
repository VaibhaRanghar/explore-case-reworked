"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import homeData from "@/data/homeData.json";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const hparRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles
    const hp = hparRef.current;
    if (hp && hp.children.length === 0) {
      for (let i = 0; i < 32; i++) {
        const p = document.createElement("div");
        p.className = "pt";
        const l = Math.random() * 100;
        const d = 10 + Math.random() * 16;
        const del = -Math.random() * d;
        const dx = (Math.random() - 0.5) * 100;
        p.style.cssText = `left:${l}%;bottom:0;--dx:${dx}px;animation-duration:${d}s;animation-delay:${del}s;width:${1 + Math.random() * 2}px;height:${1 + Math.random() * 2}px`;
        hp.appendChild(p);
      }
    }

    // Counter animation
    const animCnt = (el: HTMLElement, target: number) => {
      const t0 = performance.now();
      const dur = 2000;
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        const v = Math.round(ease * target);
        el.textContent = v + (target >= 100 ? "+" : "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const cio = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            const c = parseInt(target.dataset.count || "0");
            if (c) animCnt(target, c);
            cio.unobserve(target);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

    // Marquee pause on hover
    const mqt = document.getElementById("mqt");
    if (mqt) {
      const pause = () => (mqt.style.animationPlayState = "paused");
      const play = () => (mqt.style.animationPlayState = "running");
      mqt.addEventListener("mouseenter", pause);
      mqt.addEventListener("mouseleave", play);
    }

    // Hero parallax
    const handleScroll = () => {
      const hbg = document.getElementById("hbg");
      if (hbg && window.scrollY < window.innerHeight) {
        hbg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { hero, stats, marqueeItems, whyChooseUs, charDhamPreview, adventureTours, reviews, ctaBanner } = homeData;

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="hero" style={{ padding: 0 }}>
        <div
          className="hbg"
          id="hbg"
          style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
        ></div>
        <div className="hov"></div>
        <div className="hpar" id="hpar" ref={hparRef}></div>
        <div className="hcon">
          <div className="eyebrow">
            <span className="eline"></span>
            <span className="etxt">{hero.eyebrow}</span>
          </div>
          <h1>
            <span className="hl">{hero.headingLines[0]}</span>
            <span className="hl">
              <em>{hero.headingLines[1].split(" ")[0]}</em>{" "}
              {hero.headingLines[1].split(" ").slice(1).join(" ")}
            </span>
            <span className="hl">{hero.headingLines[2]}</span>
          </h1>
          <p className="hsub">{hero.subtext}</p>
          <div className="hact">
            <Link href={hero.cta[0].href} className="btn-g">
              <span>{hero.cta[0].label}</span>
              <span>→</span>
            </Link>
            <Link href={hero.cta[1].href} className="btn-w">
              {hero.cta[1].label}
            </Link>
          </div>
        </div>
        <div className="scrlind">
          <span>scroll</span>
          <div className="scrlbar"></div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <div className="sbar">
        {stats.map((stat, i) => (
          <div className="si" key={i}>
            {stat.count ? (
              <span className="snum" data-count={stat.count}>
                0
              </span>
            ) : (
              <span className="snum">{stat.value}</span>
            )}
            <span className="slbl">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ═══ MARQUEE ═══ */}
      <div className="mq">
        <div className="mqt" id="mqt">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>
              <span className="mqi">✦ {item}</span>
              <span className="mqi mqd"> · </span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section style={{ background: "var(--cream)" }}>
        <div className="wgrid">
          <ScrollReveal className="wleft fl">
            <div className="stag">
              <span className="stagline"></span>
              <span className="stagtxt">{whyChooseUs.tagline}</span>
            </div>
            <h2
              className="sh"
              dangerouslySetInnerHTML={{ __html: whyChooseUs.heading }}
            />
            <p className="sp">{whyChooseUs.description}</p>
            <div style={{ marginTop: "2.2rem" }}>
              <Link href="/about" className="btn-o">
                Our Story
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal className="wright fr">
            {whyChooseUs.features.map((f, i) => (
              <div className="wc" key={i}>
                <span className="wic">{f.icon}</span>
                <h3 className="wct">{f.title}</h3>
                <p className="wcp">{f.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <div className="gdiv"></div>

      {/* ═══ CHAR DHAM PREVIEW ═══ */}
      <section className="cd-home">
        <div className="cd-home-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={charDhamPreview.image} alt="Char Dham" />
          <div className="cd-home-gradient"></div>
        </div>
        <ScrollReveal className="cd-home-content fr">
          <div className="stag">
            <span className="stagline" style={{ background: "var(--gold)" }}></span>
            <span className="stagtxt" style={{ color: "var(--gold)" }}>
              {charDhamPreview.tagline}
            </span>
          </div>
          <h2
            className="sh wh"
            dangerouslySetInnerHTML={{ __html: charDhamPreview.heading }}
          />
          <p className="sp wh" style={{ margin: "1rem 0 2rem" }}>
            {charDhamPreview.description}
          </p>
          <ul className="cd-home-list">
            {charDhamPreview.features.map((feat, i) => (
              <li key={i}>
                <span>✦</span>
                {feat}
              </li>
            ))}
          </ul>
          <Link href="/chardham" className="btn-g" style={{ width: "fit-content" }}>
            <span>Explore Char Dham</span>
            <span>→</span>
          </Link>
        </ScrollReveal>
      </section>

      {/* ═══ ADVENTURE TOURS ═══ */}
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <ScrollReveal>
            <div className="stag">
              <span className="stagline"></span>
              <span className="stagtxt">{adventureTours.tagline}</span>
            </div>
            <h2
              className="sh"
              dangerouslySetInnerHTML={{ __html: adventureTours.heading }}
            />
          </ScrollReveal>
          <Link href="/tours" className="btn-g">
            <span>All Packages</span>
            <span>→</span>
          </Link>
        </div>
        <ScrollReveal>
          <div className="tgrid">
            {adventureTours.tours.map((tour, i) => (
              <div className="tc" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="tc-img" src={tour.image} alt={tour.name} />
                <div className="tc-ov">
                  <span className="tbdg">{tour.badge}</span>
                  <h3 className="tnm">{tour.name}</h3>
                  {tour.description && <p className="tdsc">{tour.description}</p>}
                  <Link href="/tours" className="tlnk">
                    Enquire Now <span className="tlnk-arr">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section style={{ background: "var(--forest)", padding: "7rem 4rem" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 3.5rem" }}>
            <div className="stag" style={{ justifyContent: "center" }}>
              <span className="stagline" style={{ background: "var(--gold)" }}></span>
              <span className="stagtxt" style={{ color: "var(--gold)" }}>
                {reviews.tagline}
              </span>
            </div>
            <h2
              className="sh wh"
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{ __html: reviews.heading }}
            />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rvgrid">
            {reviews.items.map((r, i) => (
              <div className="rv" key={i}>
                <div className="rvs">{"★".repeat(r.stars)}</div>
                <p className="rvt">&ldquo;{r.text}&rdquo;</p>
                <div className="rva">
                  <strong>{r.author}</strong>
                  {r.role}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="cta-banner">
        <p>{ctaBanner.eyebrow}</p>
        <h2 dangerouslySetInnerHTML={{ __html: ctaBanner.heading }} />
        <div>
          <Link
            href="/contact"
            className="btn-g"
            style={{
              background: "var(--forest)",
              color: "var(--gold-l)",
              marginRight: "1rem",
            }}
          >
            <span>Book Now</span>
          </Link>
          <a
            href={`https://api.whatsapp.com/send/?phone=7536061516&text=Hello!`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-o"
          >
            <span>WhatsApp Us</span>
          </a>
        </div>
      </section>
    </main>
  );
}
