import ReduxProvider from "@/providers";
import type { Metadata } from "next";
import "./globals.css";
import { MenrvaThemeProvider } from "./ui/theme/themeProvider";

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
      <body
        className={`bg-old-lace dark:bg-onyx`}
      >
        <ReduxProvider>
          <MenrvaThemeProvider>
            {auth}
            {children}
          </MenrvaThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
