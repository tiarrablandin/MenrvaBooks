import { fetchUserByTag } from "@/lib/services/apiService";
import Profile from "@/ui/user/settings/profile";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "User Profile",
};

export default async function Page() {
  const tag = cookies().get('tag')?.value as string;
  const token = cookies().get('jwt')?.value as string;
  const user = await fetchUserByTag(tag);
  
  return (
    <main className="min-h-[calc(100vh-295px)] h-[97%] my-auto w-[calc(100%-4rem)] mr-1 ml-auto">
      {user ? <Profile user={user}/> : <></>}
    </main>
  );
}