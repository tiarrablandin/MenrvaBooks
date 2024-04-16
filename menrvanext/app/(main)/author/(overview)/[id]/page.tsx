import AuthorPage from "@/app/ui/authorPage/authorPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <AuthorPage/>
    </main>
  );
}
