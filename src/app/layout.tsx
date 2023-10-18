import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import DarkHeader from "./components/darkHeader";
import LightHeader from "./components/lightHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bolsas",
  description: "Melhores bolsas e acessórios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkHeader />
        <LightHeader />
        {children}
      </body>
    </html>
  );
}
