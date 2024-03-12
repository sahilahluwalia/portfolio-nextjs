import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO } from "@/app/contants";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: SEO.openGraph,
  twitter: SEO.twitter,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
