import Careers from "@/app/ui/careers/careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <Careers/>
    </main>
  );
}