import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ContentMeta {
  title: string;
  description: string;
  date: string;
  category?: string;
  slug: string;
  [key: string]: unknown;
}

function getContentDir(type: "careers" | "blog") {
  return path.join(process.cwd(), "content", type);
}

export function getAllContent(type: "careers" | "blog"): ContentMeta[] {
  const dir = getContentDir(type);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(raw);
      return { ...data, slug: filename.replace(/\.mdx$/, "") } as ContentMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getContentBySlug(type: "careers" | "blog", slug: string) {
  const filePath = path.join(getContentDir(type), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: { ...data, slug } as ContentMeta,
    content,
  };
}
