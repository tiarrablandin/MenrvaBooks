import { fetchUserByTag } from "@/lib/services/apiService";
import AdminHome from "@/ui/adminPortal/home/adminHome";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  const tag = cookies().get('tag')?.value as string;
  const token = cookies().get('jwt')?.value as string;
  const user = await fetchUserByTag(tag);
  
  return (
    <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
      <AdminHome token={token} user={user} />
    </main>
  );
}
