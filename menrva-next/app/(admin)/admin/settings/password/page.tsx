import { fetchUserByTag } from "@/lib/services/apiService";
import Password from "@/ui/adminPortal/settings/password";
import { cookies } from "next/headers";

// export default async function Page({ params: { id } }: { params: { id: number } }) {
export default async function Page() {
  const tag = cookies().get('tag')?.value as string;
  const user = await fetchUserByTag(tag);

  return (
    <main className="">
      {user ? <Password user={user} /> : <></>}
    </main>
  );
}