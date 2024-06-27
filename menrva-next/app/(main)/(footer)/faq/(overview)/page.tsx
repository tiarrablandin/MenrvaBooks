import FAQ from "@/ui/footer/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <FAQ/>
    </main>
  );
}