import Profile from "@/app/ui/adminPortal/settings/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <Profile/>
    </main>
  );
}