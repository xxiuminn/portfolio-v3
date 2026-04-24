import Link from "next/link";
import type { Post } from "@/lib/posts";

export function PostPreview({ post }: { post: Post }) {
  return (
    <Link href={`/journal/${post.slug}`} className="post-link-card">
      <div className="post-date">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </div>
      <h2 className="post-name">{post.title}</h2>
      <p className="post-meta">
        {post.category} · {post.excerpt}
      </p>
    </Link>
  );
}
