import About from "@/ui/footer/about/about";
import Team from "@/ui/footer/about/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <About/>
      <Team/>
    </main>
  );
}