import Notifications from "@/app/ui/adminPortal/settings/notifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <Notifications/>
    </main>
  );
}