import HomeComponent from "@/ui/home/home";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  const theme = cookies().get('theme')?.value as string;
  console.log("##**##**##** " + theme);
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <HomeComponent />
    </main>
  );
}
