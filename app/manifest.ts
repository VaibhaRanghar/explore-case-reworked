import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Musafir Trails - Uttarakhand Travel & Char Dham Yatra",
    short_name: "Musafir Trails",
    description:
      "Dehradun's trusted travel agency for Char Dham Yatra packages, Uttarakhand tours, and cab rentals.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1A0F",
    theme_color: "#C9A84C",
    icons: [
      {
        src: "/musafir_logo-02.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/musafir_logo-02.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
