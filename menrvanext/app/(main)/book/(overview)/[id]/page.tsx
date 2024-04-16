import SingleBook from "@/app/ui/book/singleBook";
import { Metadata } from "next";

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