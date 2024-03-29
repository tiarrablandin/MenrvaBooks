import Careers from "@/app/ui/careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <Careers/>
    </main>
  );
}