import ReduxProvider from "@/providers";
import type { Metadata } from "next";
import { Advent_Pro, } from "next/font/google";
import "./globals.css";
import { Footer } from "./ui/footer";
import CustomNavbar from "./ui/navbar/navigation";
import { MenrvaThemeProvider } from "./ui/theme/themeProvider";
import Nav from "./ui/navbar/nav";

const advent = Advent_Pro({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menrva Books",
  description: "",
};

export default function RootLayout({
  children,
  auth
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <MenrvaThemeProvider>
          <body className={`${advent.className} bg-old-lace dark:bg-onyx text-eggplant dark:text-old-lace`}>
            <Nav />
            {auth}
            {children}
            <Footer />
          </body>
        </MenrvaThemeProvider>
      </ReduxProvider>
    </html>
  );
}
