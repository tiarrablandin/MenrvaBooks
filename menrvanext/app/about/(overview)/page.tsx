import AboutCard from "@/app/ui/footer/about/aboutCard";
import TeamCard from "@/app/ui/footer/about/teamCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <AboutCard/>
      <TeamCard/>
    </main>
  );
}