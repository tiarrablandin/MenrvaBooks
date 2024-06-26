import UserSettingsPage from "@/ui/user/settings/userSettingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <UserSettingsPage />
    </main>
  );
}
