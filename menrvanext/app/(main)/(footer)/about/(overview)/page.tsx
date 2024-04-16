import About from "@/app/ui/about/about";
import Team from "@/app/ui/about/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <About/>
      <Team/>
    </main>
  );
}