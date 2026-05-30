import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IconSprite } from "@/components/landing/icon-sprite";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savantia — Automatisez vos emails et votre SAV",
  description:
    "Savantia automatise vos emails et votre support client. Réponses en minutes, 24/7, sans recruter. Audit gratuit de 30 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
