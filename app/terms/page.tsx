import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Lansia",
  description:
    "Terms governing your use of Lansia. Slovenia governing law. EU consumer protections apply.",
};

export default function TermsPage() {
  return <LegalPage file="terms.md" />;
}
