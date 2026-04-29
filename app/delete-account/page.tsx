import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Delete your account — Lansia",
  description:
    "How to delete your Lansia account, what data is removed, and what is retained for tax and accounting reasons.",
};

export default function DeleteAccountPage() {
  return <LegalPage file="delete-account.md" />;
}
