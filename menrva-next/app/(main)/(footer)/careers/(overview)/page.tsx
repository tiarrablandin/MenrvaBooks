import Careers from "@/ui/footer/careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <Careers/>
    </main>
  );
}