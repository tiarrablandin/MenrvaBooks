import TermsAndPrivacy from "@/app/ui/legal/termsAndPrivacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)] bg-old-lace bg-dark:onyx">
      <TermsAndPrivacy/>
    </main>
  );
}