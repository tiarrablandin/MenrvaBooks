import FAQ from "@/app/ui/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <FAQ/>
    </main>
  );
}