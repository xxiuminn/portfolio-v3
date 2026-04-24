import type { Route } from "next";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems: Array<
  | { href: Route; label: string; type: "route" }
  | { href: `#${string}`; label: string; type: "anchor" }
> = [
  { href: "/", label: "Home", type: "route" },
  { href: "#projects", label: "Projects", type: "anchor" as const },
  { href: "/journal", label: "Journal", type: "route" },
  { href: "#contact", label: "Contact", type: "anchor" as const }
];

export function SiteHeader() {
  return (
    <header className="topbar">
      <Link href="/" className="brand" aria-label="Go to homepage">
        <span className="brand-mark">Portfolio</span>
        <span className="brand-name">Subtle Studio</span>
      </Link>
      <nav className="nav" aria-label="Primary">
        {navItems.map((item) =>
          item.type === "route" ? (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ) : (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          )
        )}
        <ThemeToggle />
        <a href="mailto:hello@example.com" className="button">
          Hire me
        </a>
      </nav>
    </header>
  );
}
