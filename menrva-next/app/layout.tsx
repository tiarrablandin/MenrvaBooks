import { MenrvaThemeProvider } from "@/providers/themeProvider";
import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import "./globals.css";

const advent = Advent_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: '--font-advent-pro',
  display: 'swap',
  fallback: ['Roboto_Mono', 'sans-serif'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Menrva Books",
  description: "Search for your favorite Books and Authors.",
};

export default function RootLayout({
  children,
  auth
}: Readonly<{
  children: React.ReactNode;
  auth?: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${advent.variable}`}>
      <body className={`bg-old-lace dark:bg-onyx text-eggplant dark:text-old-lace min-h-[calc(100vh-295px)]`}>
        <MenrvaThemeProvider>
          {children}
          {auth}
        </MenrvaThemeProvider>
      </body>
    </html>
  );
}
