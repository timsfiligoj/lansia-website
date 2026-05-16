import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  description: string;
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value.slice(0, 10);
  return "";
}

function readPostFile(filename: string): BlogPost | null {
  if (!filename.endsWith(".md")) return null;
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = String(data.slug ?? filename.replace(/\.md$/, ""));
  return {
    slug,
    title: String(data.title ?? slug),
    date: toIsoDate(data.date),
    description: String(data.description ?? ""),
    body: content.trim(),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR);
  const posts: BlogPost[] = [];
  for (const file of files) {
    const post = readPostFile(file);
    if (post) posts.push(post);
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filename = `${slug}.md`;
  const filePath = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  return readPostFile(filename);
}

export function formatPostDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
