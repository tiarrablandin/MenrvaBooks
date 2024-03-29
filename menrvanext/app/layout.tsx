import ReduxProvider from "@/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./ui/footer";
import CustomNavbar from "./ui/navbar/nav";
import { MenrvaThemeProvider } from "./ui/theme/themeProvider";

const inter = Inter({ subsets: ["latin"] });

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
          <body className={`${inter.className}`}>
            <CustomNavbar />
            {children}
          <Footer />
          </body>
        </MenrvaThemeProvider>
      </ReduxProvider>
    </html>
  );
}
