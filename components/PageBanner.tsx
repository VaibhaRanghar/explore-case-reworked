export default function PageBanner({
  image,
  tagline,
  heading,
  subtitle,
}: {
  image: string;
  tagline: string;
  heading: string;
  subtitle: string;
}) {
  return (
    <div className="pg-banner">
      <div
        className="pg-banner-bg"
        style={{ background: `url('${image}')` }}
      ></div>
      <div className="pg-banner-ov"></div>
      <div className="pg-banner-con">
        <div className="stag">
          <span className="stagline"></span>
          <span className="stagtxt">{tagline}</span>
        </div>
        <h1
          className="sh"
          style={{ color: "#fff" }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p
          style={{
            color: "rgba(255,255,255,.6)",
            fontSize: ".95rem",
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
