import HomeComponent from "@/app/ui/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <HomeComponent/>
    </main>
  );
}
