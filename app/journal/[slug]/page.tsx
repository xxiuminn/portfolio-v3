import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const shortDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).toUpperCase();

  return (
    <div className="container">
      <div className="back-nav">
        <Link href="/">← [Your Name]</Link>
      </div>

      <header className="article-header">
        <div className="article-meta">
          {shortDate}
          <span>·</span>
          {post.category}
        </div>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-subtitle">{post.excerpt}</p>
      </header>

      <div className="author-row">
        <div className="author-avatar" />
        <div>
          <div className="author-name">[Your Name]</div>
          <div className="author-date">{formattedDate}</div>
        </div>
      </div>

      <article className="article-body">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </article>

      {(prevPost || nextPost) && (
        <nav className="article-footer">
          <div>
            {prevPost && (
              <>
                <div className="nav-label">← Previous</div>
                <Link href={`/journal/${prevPost.slug}`}>{prevPost.title}</Link>
              </>
            )}
          </div>
          <div className="nav-next">
            {nextPost && (
              <>
                <div className="nav-label">Next →</div>
                <Link href={`/journal/${nextPost.slug}`}>{nextPost.title}</Link>
              </>
            )}
          </div>
        </nav>
      )}

      <footer className="site-footer" style={{ marginTop: prevPost || nextPost ? 0 : 0 }}>
        <Link href="/journal">← All writing</Link>
        <span>hello@yourname.dev</span>
      </footer>
    </div>
  );
}
