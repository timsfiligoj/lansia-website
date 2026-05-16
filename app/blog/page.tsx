import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/blog";

const SITE_URL = "https://lansia.app";
const INDEX_DESCRIPTION =
  "Notes on small wins, daily plans, and why the practice beats the framework.";

export const metadata: Metadata = {
  title: "Blog · Lansia",
  description: INDEX_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog · Lansia",
    description: INDEX_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: "Lansia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent(
          "Journal"
        )}&description=${encodeURIComponent(INDEX_DESCRIPTION)}`,
        width: 1200,
        height: 630,
        alt: "Lansia Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog · Lansia",
    description: INDEX_DESCRIPTION,
    images: [
      `${SITE_URL}/api/og?title=${encodeURIComponent(
        "Journal"
      )}&description=${encodeURIComponent(INDEX_DESCRIPTION)}`,
    ],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const total = posts.length;
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      {/* Top nav strip */}
      <div className="relative z-10 border-b border-white/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <Link
            href="/"
            className="font-[family-name:var(--font-kanit)] text-xl font-medium text-white sm:text-2xl"
          >
            Lansia
          </Link>
          <Link
            href="/"
            className="text-sm text-[rgba(255,255,255,0.6)] transition hover:text-white"
          >
            ← Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-hero-glow relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(121,53,238,0.20),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(206,149,249,0.32)] bg-[rgba(206,149,249,0.08)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-lilac)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-lilac)]" />
            Journal
          </div>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-kanit)] text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Small wins,
            <br />
            <span className="text-[color:var(--color-lilac)]">on the record.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[rgba(255,255,255,0.72)] sm:text-lg">
            {INDEX_DESCRIPTION}
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-white/8 bg-[rgba(255,255,255,0.04)] p-8 transition hover:border-[rgba(206,149,249,0.32)] hover:bg-[rgba(255,255,255,0.06)] sm:p-12"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(121,53,238,0.22),transparent_65%)] transition group-hover:bg-[radial-gradient(circle,rgba(121,53,238,0.32),transparent_65%)]"
              />
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[rgba(255,255,255,0.55)]">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(206,149,249,0.32)] bg-[rgba(206,149,249,0.08)] px-2.5 py-1 text-[color:var(--color-lilac)]">
                      <span className="h-1 w-1 rounded-full bg-[color:var(--color-lilac)]" />
                      Latest
                    </span>
                    <span>{formatPostDate(featured.date)}</span>
                  </div>
                  <h2 className="mt-5 font-[family-name:var(--font-kanit)] text-3xl leading-[1.1] text-white transition group-hover:text-[color:var(--color-lilac)] sm:text-4xl md:text-[2.75rem]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-[rgba(255,255,255,0.72)]">
                    {featured.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-lilac)]">
                  Read post
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <>
              <div className="mt-16 mb-8 flex items-end justify-between border-b border-white/8 pb-4">
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-[rgba(255,255,255,0.55)]">
                  All posts
                </div>
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-[rgba(255,255,255,0.4)]">
                  {String(total).padStart(2, "0")} entries
                </div>
              </div>
              <ul className="grid gap-5 md:grid-cols-2">
                {rest.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.03)] p-7 transition hover:-translate-y-0.5 hover:border-[rgba(206,149,249,0.32)] hover:bg-[rgba(255,255,255,0.06)]"
                    >
                      <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">
                        {formatPostDate(post.date)}
                      </div>
                      <h3 className="mt-4 font-[family-name:var(--font-kanit)] text-[1.5rem] leading-[1.15] text-white transition group-hover:text-[color:var(--color-lilac)]">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[rgba(255,255,255,0.7)]">
                        {post.description}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-lilac)]">
                        Read
                        <span className="transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
