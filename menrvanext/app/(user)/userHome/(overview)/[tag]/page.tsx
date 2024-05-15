import { fetchUserByTag } from "@/app/lib/services/apiService";
import UserComponent from "@/app/ui/user/userHome";
import UserSpeedDial from "@/app/ui/user/userSpeedDial";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks | User",
};

export default async function Page({ params: { tag } }: { params: { tag: string } }) {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  // console.log("#*******######********" + JSON.stringify(user));

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      {tag ? <UserComponent tag={tag} /> : <></>}
    </main>
  );
}
