import { isValidElement, Children } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

function TechStackParagraph({ children }: { children?: React.ReactNode }) {
  const childArray = Children.toArray(children);

  if (childArray.length >= 2) {
    const first = childArray[0];
    if (
      isValidElement(first) &&
      first.type === "strong" &&
      typeof (first.props as { children?: string }).children === "string" &&
      (first.props as { children?: string }).children
        ?.toLowerCase()
        .startsWith("tech stack")
    ) {
      const label = (first.props as { children: string }).children;
      const restText = childArray
        .slice(1)
        .map((c) => (typeof c === "string" ? c : ""))
        .join("");
      const techs = restText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      return (
        <div className="tech-stack-row">
          <span className="tech-stack-label">{label}</span>
          <div className="tech-pills">
            {techs.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    }
  }

  return <p>{children}</p>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
  const nextProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;

  return (
    <div className="container">
      <div className="back-nav">
        <Link href="/">← Xiumin</Link>
      </div>

      <header className="project-header">
        <div className="project-type">Project · {project.year}</div>
        <h1 className="project-title">{project.name}</h1>
        <p className="project-subtitle">{project.description}</p>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="primary"
            >
              <ExternalLinkIcon className="external-link-icon" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="external-link-icon" />
              Live demo
            </a>
          )}
        </div>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="proj-tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {project.content.trim() && (
        <article className="article-body">
          <Markdown remarkPlugins={[remarkGfm]} components={{ p: TechStackParagraph }}>{project.content}</Markdown>
        </article>
      )}

      {(prevProject || nextProject) && (
        <nav className="article-footer">
          <div>
            {prevProject && (
              <>
                <div className="nav-label">← Previous project</div>
                <Link href={`/projects/${prevProject.slug}`}>
                  {prevProject.name}
                </Link>
              </>
            )}
          </div>
          <div className="nav-next">
            {nextProject && (
              <>
                <div className="nav-label">Next project →</div>
                <Link href={`/projects/${nextProject.slug}`}>
                  {nextProject.name}
                </Link>
              </>
            )}
          </div>
        </nav>
      )}

      <footer className="site-footer">
        <Link href="/">← Back home</Link>
        <span>xiumin.how.mail@gmail.com</span>
      </footer>
    </div>
  );
}
