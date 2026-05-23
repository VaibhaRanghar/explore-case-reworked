import Link from "next/link";
import siteData from "@/data/siteData.json";

export default function Footer() {
  const { footer, socialLinks, phone, email, address } = siteData;

  return (
    <footer id="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="flogo">
            <div className="logo-placeholder" style={{ width: 32, height: 32, borderColor: "rgba(201,168,76,.25)" }}>
              {/* Logo will go here */}
            </div>
            <span className="logo-text">
              Explore<span>Case</span>
            </span>
          </Link>
          <p className="fdesc">{footer.description}</p>
          <div className="fsoc-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="fsb"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="fcol">
          <h4>Explore</h4>
          <ul>
            {footer.exploreLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="fcol">
          <h4>Company</h4>
          <ul>
            {footer.companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="fcol">
          <h4>Contact</h4>
          {phone.map((p) => (
            <p key={p} className="fcp">📞 {p}</p>
          ))}
          <p className="fcp">✉️ {email}</p>
          <p className="fcp" style={{ marginTop: ".5rem" }}>📍 {address}</p>
        </div>
      </div>
      <div className="footer-bot">
        <span>{footer.copyright}</span>
        <span style={{ color: "rgba(255,255,255,.16)" }}>{footer.location}</span>
      </div>
    </footer>
  );
}
