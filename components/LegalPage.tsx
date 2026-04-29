import fs from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export async function LegalPage({ file }: { file: "privacy.md" | "terms.md" | "support.md" | "delete-account.md" }) {
  const filePath = path.join(process.cwd(), "content", file);
  const source = await fs.readFile(filePath, "utf-8");

  return (
    <main>
      <div className="border-b border-white/8">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-6 sm:px-10">
          <Link
            href="/"
            className="text-sm text-[rgba(255,255,255,0.6)] transition hover:text-white"
          >
            ← Lansia
          </Link>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <div className="prose-lansia">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
