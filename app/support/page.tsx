import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Support — Lansia",
  description:
    "How to reach Lansia support, common questions, and help with your account.",
};

export default function SupportPage() {
  return <LegalPage file="support.md" />;
}
