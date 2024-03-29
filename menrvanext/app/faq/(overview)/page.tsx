import FAQ from "@/app/ui/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-[72vh]">
      <FAQ/>
    </main>
  );
}