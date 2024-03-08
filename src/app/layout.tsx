import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sahil Ahluwalia | Software Developer",
  description:
    "Sahil Ahluwalia is a Software Developer based in Mumbai, India. He mainly works in React and Typescript. He is obsessed about solving problems through code, and trying his best every day.",
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
