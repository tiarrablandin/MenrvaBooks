import { fetchUserByTag } from "@/lib/services/apiService";
import Profile from "@/ui/adminPortal/settings/profile";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function Page() {
  const tag = cookies().get('tag')?.value as string;
  const token = cookies().get('jwt')?.value as string;
  const user = await fetchUserByTag(tag);
  
  return (
    <main className="">
      {user ? <Profile user={user}/> : <></>}
    </main>
  );
}