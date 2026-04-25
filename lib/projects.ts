import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type ProjectMeta = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  year: string;
};

export type Project = ProjectMeta & {
  slug: string;
  content: string;
};

const projectsDirectory = path.join(process.cwd(), "content", "projects");

async function readProjectFile(fileName: string): Promise<Project> {
  const fullPath = path.join(projectsDirectory, fileName);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const slug = fileName.replace(/\.md$/, "");

  return {
    slug,
    content,
    name: String(data.name),
    description: String(data.description),
    tags: Array.isArray(data.tags) ? data.tags : [],
    github: data.github ? String(data.github) : undefined,
    liveUrl: data.liveUrl ? String(data.liveUrl) : undefined,
    year: String(data.year),
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const entries = await fs.readdir(projectsDirectory);
  const projects = await Promise.all(
    entries.filter((entry) => entry.endsWith(".md")).map(readProjectFile)
  );
  return projects.sort((a, b) => Number(b.year) - Number(a.year));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    return await readProjectFile(`${slug}.md`);
  } catch {
    return null;
  }
}
