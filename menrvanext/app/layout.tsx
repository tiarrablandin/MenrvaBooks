import ReduxProvider from "@/providers";
import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import "./globals.css";
import { MenrvaThemeProvider } from "./ui/theme/themeProvider";

const advent = Advent_Pro({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menrva Books",
  description: "",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <MenrvaThemeProvider>
            <div
              className={`${advent.className} bg-old-lace dark:bg-onyx text-eggplant dark:text-old-lace`}
            >
              <div>{auth}</div>
              <div>{children}</div>
            </div>
          </MenrvaThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
