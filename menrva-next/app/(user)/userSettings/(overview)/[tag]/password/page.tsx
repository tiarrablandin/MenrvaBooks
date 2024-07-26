import { fetchUserByTag } from "@/lib/services/apiService";
import Password from "@/ui/user/settings/password";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Change Password",
};

export default async function Page() {
  const tag = cookies().get('tag')?.value as string;
  const user = await fetchUserByTag(tag);

  return (
    <main className="">
      {user ? <Password user={user} /> : <></>}
    </main>
  );
}