import ReduxProvider from "@/providers/reduxProvider";
import { MenrvaThemeProvider } from "@/providers/themeProvider";
import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import "./globals.css";

const advent = Advent_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menrva Books",
  description: "Search for your favorite Books and Authors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${advent.className} bg-old-lace dark:bg-onyx`}>
        <ReduxProvider>
          <MenrvaThemeProvider>
            {children}
          </MenrvaThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
