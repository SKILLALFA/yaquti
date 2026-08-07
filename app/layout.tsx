import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Shared by the Open Graph and Twitter cards so the two can't drift apart.
const SOCIAL_TITLE = "My Alfa World — Six Ways to Earn. One World of Opportunity.";
const SOCIAL_DESCRIPTION =
  "My Alfa World is a premium-products affiliate-marketing platform launching in nine countries with six ways to earn: profit-share cashback, direct referral, spill over, lifetime matching, brand outlets, and brand royalty.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yaquti.com"),
  title: "YAQUTI — Be Rare.",
  description:
    "Science-backed nutrition for those who choose quality over compromise.",
  icons: {
    icon: [
      { url: "/favicon.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-ink.ico", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/icon-ink.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: "https://yaquti.com",
    siteName: "YAQUTI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YAQUTI Brand Imagery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
