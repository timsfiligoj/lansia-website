import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/blog";
import { StoreBadges } from "@/components/StoreBadges";

// Strips the inline store-link paragraph from every post body. The CTA card
// at the bottom of the page replaces it with proper App Store / Play badges.
const STORE_LINE_REGEX =
  /\n*\[Download on the App Store\]\([^)]+\)\s*·\s*\[Get it on Google Play\]\([^)]+\)\n*/g;

function stripStoreLinks(body: string): string {
  return body.replace(STORE_LINE_REGEX, "\n\n");
}

const SITE_URL = "https://lansia.app";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogUrl = `${SITE_URL}/api/og?slug=${encodeURIComponent(post.slug)}`;
  const canonical = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} · Lansia`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      siteName: "Lansia",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl],
    },
  };
}

const markdownComponents: Components = {
  a({ node: _node, href, children, ...rest }) {
    const isExternal =
      typeof href === "string" && /^https?:\/\//i.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  },
};

function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const minutes = readingTime(post.body);

  return (
    <main>
      {/* Top strip */}
      <div className="relative z-10 border-b border-white/8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <Link
            href="/"
            className="font-[family-name:var(--font-kanit)] text-xl font-medium text-white sm:text-2xl"
          >
            Lansia
          </Link>
          <Link
            href="/blog"
            className="text-sm text-[rgba(255,255,255,0.6)] transition hover:text-white"
          >
            ← All posts
          </Link>
        </div>
      </div>

      {/* Hero header */}
      <section className="bg-hero-glow relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(121,53,238,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(206,149,249,0.32)] bg-[rgba(206,149,249,0.08)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-lilac)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-lilac)]" />
            Journal
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-kanit)] text-[2.25rem] font-medium leading-[1.08] text-white sm:text-5xl md:text-[3.25rem]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.22em] text-[rgba(255,255,255,0.5)]">
            <span>{formatPostDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>{minutes} min read</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="mx-auto max-w-2xl px-6 pb-24 pt-12 sm:px-10 sm:pb-32">
        <div className="prose-lansia prose-blog">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {stripStoreLinks(post.body)}
          </ReactMarkdown>
        </div>

        {/* Download CTA */}
        <div className="mt-16 rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.03)] p-7 sm:p-8">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-lilac)]">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-lilac)] align-middle" />
            Lansia
          </div>
          <div className="mt-3 font-[family-name:var(--font-kanit)] text-2xl font-medium leading-[1.15] text-white">
            The daily plan that compounds.
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.7)]">
            Up to five tasks for tomorrow, written tonight. $4.99 once, no subscription.
          </p>
          <div className="mt-6">
            <StoreBadges size="md" />
          </div>
        </div>

        {/* Back to all */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[rgba(255,255,255,0.6)] transition hover:text-white"
          >
            ← All posts
          </Link>
        </div>
      </article>
    </main>
  );
}
