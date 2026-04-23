import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Lansia",
  description:
    "How Lansia (350life, Tim Sfiligoj s.p.) handles personal data. GDPR-compliant.",
};

export default function PrivacyPage() {
  return <LegalPage file="privacy.md" />;
}
