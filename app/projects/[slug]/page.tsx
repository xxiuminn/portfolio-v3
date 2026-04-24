import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/external-link-icon";
import { projects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const nextProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  return (
    <div className="container">
      <div className="back-nav">
        <Link href="/">← [Your Name]</Link>
      </div>

      <header className="project-header">
        <div className="project-type">
          Project · {project.year}{project.status ? ` · ${project.status}` : ""}
        </div>
        <h1 className="project-title">{project.name}</h1>
        <p className="project-subtitle">{project.longDescription ?? project.description}</p>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="primary">
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
            <span key={tag} className="proj-tag">{tag}</span>
          ))}
        </div>
      </header>

      {(prevProject || nextProject) && (
        <nav className="article-footer">
          <div>
            {prevProject && (
              <>
                <div className="nav-label">← Previous project</div>
                <Link href={`/projects/${prevProject.slug}`}>{prevProject.name}</Link>
              </>
            )}
          </div>
          <div className="nav-next">
            {nextProject && (
              <>
                <div className="nav-label">Next project →</div>
                <Link href={`/projects/${nextProject.slug}`}>{nextProject.name}</Link>
              </>
            )}
          </div>
        </nav>
      )}

      <footer className="site-footer">
        <Link href="/">← Back home</Link>
        <span>hello@yourname.dev</span>
      </footer>
    </div>
  );
}
