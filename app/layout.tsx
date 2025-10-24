import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Button Component Demo",
  description: "Challenge from the Great Frontend executed by Lisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_sans.className}>
      <body>{children}</body>
    </html>
  );
}
