import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { ScrollReveal } from "@/components/scroll-reveal";

function formatBlogDate(dateStr: string) {
  const d = new Date(dateStr);
  return d
    .toLocaleDateString("en-US", { month: "short", day: "2-digit" })
    .toUpperCase();
}

export default async function HomePage() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <div className="container">
      <ScrollReveal />
      {/* Hero */}
      <section className="hero">
        <p className="hero-line hero-line-1">Hello,</p>
        <p className="hero-line hero-line-2">I&apos;m Xiumin.</p>
        <p className="hero-line hero-line-3">I write about what I&apos;m</p>
        <p className="hero-line hero-line-4">learning, testing and building.</p>
      </section>

      {/* Journal */}
      <section className="reveal">
        <div className="section-header">
          <h2>Journal</h2>
          <Link href="/journal">All posts →</Link>
        </div>
        <div className="blog-list">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="blog-row"
            >
              <span className="blog-date">{formatBlogDate(post.date)}</span>
              <span className="blog-title">{post.title}</span>
              <span className="blog-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="reveal">
        <div className="section-header">
          <h2>Projects</h2>
          <a
            href="https://github.com/xxiuminn"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/xxiuminn →
          </a>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="proj-item"
            >
              <div className="proj-item-top">
                <span className="proj-name">{project.name}</span>
                <span className="proj-year">{project.year}</span>
              </div>
              <div className="proj-desc">{project.description}</div>
              <div className="proj-tags">{project.tags.join("  ·  ")}</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="site-footer reveal">
        <span>xiumin.how.mail@gmail.com</span>
        <span>© 2026 Xiumin How</span>
      </footer>
    </div>
  );
}
