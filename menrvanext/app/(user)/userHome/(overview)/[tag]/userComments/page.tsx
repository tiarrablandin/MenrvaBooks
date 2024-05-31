import { fetchUserByTag } from "@/app/lib/services/apiService";
import UserComponent from "@/app/ui/user/userHome";
import UserSpeedDial from "@/app/ui/user/userSpeedDial";
import { Typography } from "@/providers";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks | User",
};

export default async function Page({ params: { tag } }: { params: { tag: string } }) {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  const user = await fetchUserByTag(tag);
  // console.log("#*******######********" + JSON.stringify(user));

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      {user?.comments?.map((comment) => {
        return <Typography key={comment.id}>{comment.comment}</Typography>;
      })}
    </main>
  );
}
