import News from "@/app/ui/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-[50vh] bg-green-500">
      <News/>
    </main>
  );
}