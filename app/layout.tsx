import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Challenges and Demos by Lisa",
  description: "Challenges and Demos by Lisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_sans.className}>
      <body>
        <div>
          <nav style={{ padding: "10px 20px", backgroundColor: "#a3a3a3" }}>
            <Link href="/">Home</Link>
          </nav>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
