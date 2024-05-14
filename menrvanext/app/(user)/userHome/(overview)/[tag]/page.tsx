import { fetchUserByTag } from "@/app/lib/services/apiService";
import UserComponent from "@/app/ui/user/userHome";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks | User",
};

export default async function Page() {
  const cookieStore = cookies();
  const tag = cookieStore.get("tag")?.value;
  const token = cookieStore.get("jwt")?.value;
  // console.log("#*******######********" + JSON.stringify(user));

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      {tag ? <UserComponent tag={tag} /> : <></>}
    </main>
  );
}
