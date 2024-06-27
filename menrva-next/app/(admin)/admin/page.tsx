import { fetchUserByTag } from "@/lib/services/apiService";
import AdminHome from "@/ui/adminPortal/home/adminHome";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};



export default async function Page() {
  const token = cookies().get('jwt')?.value;
  const tag = cookies().get('tag')?.value as string;
  const fetchedUser = await fetchUserByTag(tag)

  return (
    <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
    <AdminHome id={0} token={token} user={fetchedUser}/>
    </main>
  );
}
