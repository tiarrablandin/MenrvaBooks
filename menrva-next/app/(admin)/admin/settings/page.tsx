import { fetchUserByTag } from "@/lib/services/apiService";
import InitializeFromCookies from "@/lib/utils/initializeFromCookies";
import ReduxProvider from "@/providers/reduxProvider";
import SettingsPage from "@/ui/adminPortal/settings/settingsPage";
import { cookies } from "next/headers";

export default async function Page() {
  const tag = cookies().get("tag")?.value as string;
  const user = await fetchUserByTag(tag);

  return (
    <main className="min-h-[calc(100vh-295px)]">
      <ReduxProvider>
        {user ? <SettingsPage user={user} /> : <></>}
        <InitializeFromCookies/>
      </ReduxProvider>
    </main>
  );
}
