import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
