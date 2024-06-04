import Security from "@/app/ui/adminPortal/settings/security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <Security/>
    </main>
  );
}
