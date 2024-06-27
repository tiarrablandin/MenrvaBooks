import News from "@/ui/footer/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <News/>
    </main>
  );
}