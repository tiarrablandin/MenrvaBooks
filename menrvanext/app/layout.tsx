import ReduxProvider from "@/providers";
import type { Metadata } from "next";
import { Bubbler_One, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./ui/footer";
import CustomNavbar from "./ui/navbar/nav";
import { MenrvaThemeProvider } from "./ui/theme/themeProvider";

const bubbler = Bubbler_One({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Menrva Books",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <MenrvaThemeProvider>
          <body className={`${bubbler.className} bubbler-one-regular bg-old-lace dark:bg-onyx`}>
            <CustomNavbar />
            {children}
          <Footer />
          </body>
        </MenrvaThemeProvider>
      </ReduxProvider>
    </html>
  );
}
