import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaastu Builders & Constructions | Mysore's Premier Builder",
  description:
    "RERA-registered construction company in Mysore, Karnataka. Residential, commercial, interior design, renovation and architectural planning. 19+ years, 150+ projects delivered.",
  keywords:
    "construction company mysore, builders mysore, home construction mysore, interior design mysore, vaastu builders, RERA registered mysore",
  openGraph: {
    title: "Vaastu Builders & Constructions – Mysore",
    description: "Building dreams, crafting legacies in Karnataka since 2005.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
