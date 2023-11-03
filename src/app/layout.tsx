import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import DarkHeader from "./components/darkHeader";
import LightHeader from "./components/lightHeader";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Bolsas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={inter.variable}>
      <body >
        <DarkHeader />
        <LightHeader />
        {children}
      </body>
    </html>
  );
}
