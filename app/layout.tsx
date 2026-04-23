import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ourbridalplan-n28p.vercel.app";

export const metadata: Metadata = {
  title: "Our Bridal Plan | Wedding Planning & Coordination UK",
  description:
    "UK AWA Award-winning wedding planning and coordination. 2025 Winner, Wedding Coordination Business of the Year. Full planning, day-of coordination, and bespoke support across the UK.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Our Bridal Plan | Wedding Planning & Coordination UK",
    description:
      "2025 UK AWA Award Winner, Wedding Coordination Business of the Year. Calm, expert wedding planning across the UK.",
    url: siteUrl,
    siteName: "Our Bridal Plan",
    images: [
      {
        url: "/brand/logo.png",
        width: 1254,
        height: 1254,
        alt: "Our Bridal Plan: Wedding Planning & Coordination",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Bridal Plan | Wedding Planning & Coordination UK",
    description:
      "2025 UK AWA Award Winner, Wedding Coordination Business of the Year.",
    images: ["/brand/logo.png"],
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  keywords: [
    "wedding planning UK",
    "wedding coordination",
    "African wedding planner",
    "day of coordination",
    "Our Bridal Plan",
    "BellaNaija weddings",
    "multicultural wedding",
    "UK AWA award winner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
