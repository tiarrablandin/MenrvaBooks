import { BookInteraction } from "@/app/lib/models/bookInteraction";
import { fetchBookById, fetchBookInteractionsById } from "@/app/lib/services/apiService";
import SingleBook from "@/app/ui/book/singleBook";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks | Book",
};

export default async function Page({ params: { id } }: { params: { id: number } }) {
  // const preloadLogged = () => { console.log("preloading..."); preload(id); }
  // preloadLogged();
  const token = cookies().get('jwt')?.value;
  const tag = cookies().get('tag')?.value;
  const book = await fetchBookById(id);
  // const interactions: null = null;
  const interactions: BookInteraction | null = token ? await fetchBookInteractionsById(id, token) : null;
  console.log("*****" + token)
  // preload(id, token?.value);

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      {book ?
        <SingleBook id={id} token={token} interactions={interactions} book={book} tag={tag} />
        : <></>
      }
    </main>
  );
}