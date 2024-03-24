import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "./ui/nav";
import { Footer } from "./ui/footer";
import ReduxProvider from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menrva Book",
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
        <body className={inter.className}>
          <CustomNavbar />
          {children}
          <Footer />
        </body>
      </ReduxProvider>
    </html >
  );
}
