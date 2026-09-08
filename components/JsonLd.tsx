export default function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": "https://www.themusafirtrails.com/#organization",
        "name": "The Musafir Trails",
        "url": "https://www.themusafirtrails.com",
        "logo": "https://www.themusafirtrails.com/musafir_logo-02.png",
        "image": "https://www.themusafirtrails.com/musafir_logo-02.png",
        "description":
          "Dehradun's trusted travel agency specializing in Char Dham Yatra packages, Kedarnath Helicopter bookings, adventure tours, and cab rentals across Uttarakhand.",
        "telephone": "+91-7536061516",
        "email": "info@themusafirtrails.com",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttarakhand",
          "postalCode": "248001",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.3165,
          "longitude": 78.0322,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "08:00",
            "closes": "20:00",
          },
        ],
        "sameAs": [
          "https://www.instagram.com/explore.case/",
          "https://www.facebook.com/share/1BPn5ghTEF/",
          "https://x.com/explore_case",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.themusafirtrails.com/#website",
        "url": "https://www.themusafirtrails.com",
        "name": "The Musafir Trails",
        "publisher": {
          "@id": "https://www.themusafirtrails.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
