import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Poppins } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lina's Blog",
  description: "Blog Page about health, fitness, and lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} bg-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
