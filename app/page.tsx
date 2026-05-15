import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Reviews } from "@/components/Reviews";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <FAQ />
      <Reviews />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
