import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lansia — Daily goals, real progress",
  description:
    "Five goals a day. One simple ritual. See your habits become proof of progress — streaks, perfect weeks, and the patterns behind your best days.",
  metadataBase: new URL("https://lansia.app"),
  openGraph: {
    title: "Lansia — Five goals, every day",
    description:
      "One simple daily ritual. Pay once, use forever — €4.99 Lifetime, no subscription.",
    url: "https://lansia.app",
    siteName: "Lansia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 500,
        alt: "Lansia — Five goals. Every day.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lansia — Five goals, every day",
    description:
      "One simple daily ritual. Pay once, use forever — €4.99 Lifetime, no subscription.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
