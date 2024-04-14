import AboutCard from "@/app/ui/about/aboutCard";
import Team from "@/app/ui/about/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <AboutCard/>
      <Team/>
    </main>
  );
}