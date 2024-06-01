import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import "./globals.css";
import { MenrvaThemeProvider } from "@/providers/themeProvider";

const advent = Advent_Pro({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menrva Books",
  description: "Search for your favorite Books and Authors.",
};

export default function RootLayout({
  children,
  admin,
  auth
}: Readonly<{
  children: React.ReactNode;
  admin?: React.ReactNode;
  auth?: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${advent.className}`}>
      <body className={`bg-old-lace dark:bg-onyx text-eggplant dark:text-old-lace`}>
        <MenrvaThemeProvider>
          {admin}
          {children}
          {auth}
        </MenrvaThemeProvider>
      </body>
    </html>
  );
}
