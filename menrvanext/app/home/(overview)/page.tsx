import HomeComponent from "@/app/ui/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <HomeComponent/>
    </main>
  );
}
