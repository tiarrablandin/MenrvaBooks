import UserSettingsPage from "@/ui/user/settings/userSettingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  return (
    <main className="min-h-[calc(100vh-295px)] h-[97%] w-[calc(100%-6rem)] m-auto">
      <UserSettingsPage />
    </main>
  );
}
