import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  coverTone: "tone-clay" | "tone-ink" | "tone-sand";
};

export type Post = PostMeta & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

async function readPostFile(fileName: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const slug = fileName.replace(/\.md$/, "");

  return {
    slug,
    content,
    title: String(data.title),
    date: String(data.date),
    excerpt: String(data.excerpt),
    category: String(data.category),
    coverTone: (data.coverTone as PostMeta["coverTone"]) ?? "tone-sand"
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const entries = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    entries.filter((entry) => entry.endsWith(".md")).map(readPostFile)
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await readPostFile(`${slug}.md`);
  } catch {
    return null;
  }
}
