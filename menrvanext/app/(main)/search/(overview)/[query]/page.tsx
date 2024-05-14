import { fetchUserByTag } from "@/app/lib/services/apiService";
import UserComponent from "@/app/ui/user/userHome";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks | Search",
};

export default async function Page({ params: { query } }: { params: { query: string } }) {
  const cookieStore = cookies();
  const tag = cookieStore.get("tag")?.value;
  const token = cookieStore.get("jwt")?.value;

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <p>Hello World</p>
      <p>{query}</p>
    </main>
  );
}
