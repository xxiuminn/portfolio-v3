import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { ScrollReveal } from "@/components/scroll-reveal";

function formatBlogDate(dateStr: string) {
  const d = new Date(dateStr);
  return d
    .toLocaleDateString("en-US", { month: "short", day: "2-digit" })
    .toUpperCase();
}

export default async function JournalPage() {
  const posts = await getAllPosts();

  return (
    <div className="container">
      <ScrollReveal />

      <div className="back-nav fade fade-1">
        <Link href="/">← Home</Link>
      </div>

      <section className="hero fade fade-2" style={{ paddingTop: 52 }}>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 5vw, 36px)",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          Writing
        </h1>
        <p
          style={{
            marginTop: 10,
            fontSize: 15,
            color: "var(--ink-2)",
            lineHeight: 1.6,
          }}
        >
          Thoughts on marketing, tech, and building things.
        </p>
      </section>

      <section className="reveal">
        <div
          className="blog-list"
          style={{ marginTop: 0, borderTop: "1px solid var(--rule)" }}
        >
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

      <footer className="site-footer reveal">
        <Link href="/">← Back home</Link>
        <span>xiumin.how.mail@gmail.com</span>
      </footer>
    </div>
  );
}
