import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import { asset } from "@/lib/image-loader";
import "./globals.css";

// Self-hosted Google Fonts (Cormorant Garamond variable + Poppins), latin subset.
const display = localFont({
  src: [
    { path: "./fonts/cormorant.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/cormorant-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const sans = localFont({
  src: [
    { path: "./fonts/poppins-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/poppins-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milind-guptaa.github.io"),
  title: "House of Interio | Luxury Interior Design Studio in Jaipur",
  description:
    "House of Interio is a Jaipur interior design studio led by Anjali Goyal. We design homes, boutiques and restaurants, and handle 3D visualisation and turnkey execution across Rajasthan.",
  keywords: ["interior designer Jaipur", "interior design Rajasthan", "House of Interio", "Anjali Goyal", "turnkey interiors Jaipur"],
  icons: { icon: asset("/brand/mark-color.png") },
  openGraph: {
    title: "House of Interio | Interior Design Studio, Jaipur",
    description: "Warm, considered interiors from Jaipur.",
    images: [asset("/images/hero-dining.jpg")],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B2724",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: site.name,
  founder: { "@type": "Person", name: site.owner },
  telephone: site.phone,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
