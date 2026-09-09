import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack's Story — 7th Armored Division Tank Commander, World War II",
  description:
    "The true story of Lieutenant Jack Wilson, a young tank commander in the 7th Armored Division, told through his wartime letters and the son who finally asked him to tell it. By John H. Wilson.",
};

function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="brand">Jack&rsquo;s Story</Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/the-book">The Book</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/the-book" className="buy">Buy the Book</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="f-title">Jack&rsquo;s Story</p>
      <p>7th Armored Division Tank Commander, World War II</p>
      <p>by John H. Wilson</p>
      <p className="f-small">
        &copy; 2026 John H. Wilson. &nbsp;<Link href="/contact">Contact</Link>
      </p>
    </footer>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
