import Payments from "@/app/ui/adminPortal/settings/payments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <Payments/>
    </main>
  );
}