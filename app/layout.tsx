import type { Metadata, Viewport } from "next";
import { FAQS } from "@/lib/faqs";
import "./globals.css";

const SITE_URL = "https://lansia.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/lansia/id6763288204";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.lansia";

export const metadata: Metadata = {
  title: "Lansia: Small wins, every day.",
  description:
    "A calm daily plan in five tasks or less. Plan tonight, do tomorrow. One-time $4.99, no subscription. The habit tracker for people who hate habit trackers.",
  metadataBase: new URL(SITE_URL),
  applicationName: "Lansia",
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: "Lansia",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Lansia: Small wins, every day.",
    description:
      "The daily plan that compounds. Up to five tasks for tomorrow, written tonight. $4.99 lifetime, no subscription.",
    url: SITE_URL,
    siteName: "Lansia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lansia: Small wins, every day.",
    description:
      "The daily plan that compounds. Up to five tasks for tomorrow, written tonight. $4.99 lifetime, no subscription.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D070D",
  colorScheme: "dark",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lansia",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  founder: {
    "@type": "Person",
    name: "Tim",
    jobTitle: "Founder",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lansia",
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: { "@type": "Organization", name: "Lansia" },
};

const softwareAppLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lansia",
  description:
    "A calm daily plan in five tasks or less. Plan tonight, do tomorrow. One-time $4.99 unlock, no subscription.",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  sameAs: [APP_STORE_URL, PLAY_STORE_URL],
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  author: { "@type": "Person", name: "Tim", jobTitle: "Founder" },
  publisher: { "@type": "Organization", name: "Lansia" },
  offers: [
    {
      "@type": "Offer",
      name: "Lansia Free",
      price: "0",
      priceCurrency: "USD",
      category: "free",
    },
    {
      "@type": "Offer",
      name: "Lansia Lifetime",
      price: "4.99",
      priceCurrency: "USD",
      category: "one-time purchase",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
