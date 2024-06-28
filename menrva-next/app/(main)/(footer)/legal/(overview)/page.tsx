import TermsAndPrivacy from "@/ui/footer/legal/termsAndPrivacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Privacy",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <TermsAndPrivacy/>
    </main>
  );
}