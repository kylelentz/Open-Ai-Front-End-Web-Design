import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio & Design — Reborn",
  description: "A modern reinterpretation of a 2016 web-design studio: expressive on the surface, disciplined underneath.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
