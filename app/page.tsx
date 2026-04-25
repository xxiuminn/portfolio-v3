import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { ExternalLinkIcon } from "@/components/external-link-icon";
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
      <section className="hero fade fade-1">
        <div className="hero-inner">
          <div className="avatar">
            <img src="/image-avatar.png" alt="Xiumin" />
          </div>
          <div className="hero-text">
            <h1>Hi, I&apos;m Xiumin.</h1>
            <p>
              A marketing &amp; tech enthusiast, passionate about building and
              selling.
            </p>
          </div>
        </div>
        <div className="socials">
          <a href="mailto:xiumin.how.mail@gmail.com">Email</a>
          <a
            href="https://github.com/xxiuminn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/howxiumin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* AI Portfolio Image */}
      {/* <section className="ai-image-wrap reveal">
        <div className="ai-image-ph">
          <img src="/image-avatar.png" alt="AI-generated artwork" />
        </div>
        <p className="ai-image-caption">
          A selection of AI-generated works, 2024–2026
        </p>
      </section> */}

      {/* Writing */}
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
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="proj-card"
            >
              <div className="proj-card-top">
                <span className="proj-name">{project.name}</span>
                <span className="proj-gh">
                  <ExternalLinkIcon className="external-link-icon" />
                  github
                </span>
              </div>
              <div className="proj-desc">{project.description}</div>
              <div className="proj-meta">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer reveal">
        <span>xiumin.how.mail@gmail.com</span>
        <span>© 2026 Xiumin</span>
      </footer>
    </div>
  );
}
