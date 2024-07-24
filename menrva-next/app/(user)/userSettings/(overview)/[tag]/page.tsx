import { fetchUserByTag } from "@/lib/services/apiService";
import ReduxProvider from "@/providers/reduxProvider";
import UserSettingsPage from "@/ui/user/settings/userSettingsPage";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  const tag = cookies().get("tag")?.value as string;
  const user = await fetchUserByTag(tag);

  return (
    <main className="min-h-[calc(100vh-295px)] h-[97%] w-[calc(100%-6rem)] m-auto">
      <ReduxProvider>
        {user ? <UserSettingsPage user={user} /> : <></>}
      </ReduxProvider>
    </main>
  );
}
