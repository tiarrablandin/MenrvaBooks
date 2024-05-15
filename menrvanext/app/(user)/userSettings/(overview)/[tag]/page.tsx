import UserSettingsPage from "@/app/ui/user/settings/userSettingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks | User",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <UserSettingsPage />
    </main>
  );
}
