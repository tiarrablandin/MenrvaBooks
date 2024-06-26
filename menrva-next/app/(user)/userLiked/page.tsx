import { fetchUserByTag } from "@/lib/services/apiService";
import { Metadata } from "next";
import { cookies } from "next/headers";

// TODO
//* display all of user's liked books

export async function generateMetadata({ params: { tag }, }: { params: { tag: string }; }): Promise<Metadata> {
  return {
    title: decodeURIComponent(tag),
  };
}

export default async function Page({ params: { tag } }: { params: { tag: string } }) {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value as string;
  const user = await fetchUserByTag(tag);

  return <main className="w-screen min-h-[calc(100vh-295px)] overflow-x-hidden"></main>;
}
