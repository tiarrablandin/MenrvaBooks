import Password from "@/app/ui/adminPortal/settings/password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <Password/>
    </main>
  );
}