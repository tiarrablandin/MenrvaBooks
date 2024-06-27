import { fetchUserByTag } from "@/lib/services/apiService";
import AdminHome from "@/ui/adminPortal/home/adminHome";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "| Admin Portal",
};



export default async function Page() {
<<<<<<< HEAD
  const token = cookies().get('jwt')?.value;
  const tag = cookies().get('tag')?.value as string;
  const fetchedUser = await fetchUserByTag(tag)

  return (
    <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
    <AdminHome id={0} token={token} user={fetchedUser}/>
=======
  const tag = cookies().get('tag')?.value as string;
  const token = cookies().get('jwt')?.value as string;
  const user = await fetchUserByTag(tag);
  
  return (
    <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
      <AdminHome token={token} user={user} />
>>>>>>> 11c08824c0c96eb2c0235af91819d12175862dde
    </main>
  );
}
