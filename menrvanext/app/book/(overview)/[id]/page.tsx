import SingleBook from "@/app/ui/bookResults/singleBook";
import { Metadata } from "next";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <SingleBook/>
    </main>
  );
}