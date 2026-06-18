import type { Metadata } from "next";
import Link from "next/link";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiumin How",
  description: "Performance Marketing Connoisseur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <div className="site-nav-wrapper">
          <nav className="site-nav">
            <Link href="/" className="site-nav-name">
              Xiumin How
            </Link>
            <div className="site-nav-links">
              <a href="mailto:xiumin.how.mail@gmail.com">Email</a>
              <a
                href="https://www.linkedin.com/in/howxiumin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/xxiuminn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
