import { fetchBookById, fetchBookInteractionsById } from "@/lib/services/apiService";
import ReduxProvider from "@/providers/reduxProvider";
import InitializeInteractions from "@/ui/book/interactions/initalizeInteractions";
import SingleBook, { preload } from "@/ui/book/singleBook";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks | Book",
};

export default async function Page({ params: { id } }: { params: { id: number } }) {
  const tag = cookies().get('tag')?.value as string;
  const token = cookies().get('jwt')?.value as string;

  const book = await fetchBookById(id);
  
  const interactions = token ? await fetchBookInteractionsById(id, token) : null;
  console.log(interactions)
  preload(id, token);

  return (
    <>
      <main className="w-screen min-h-[calc(100vh-295px)]">
        {book ?
          <SingleBook id={id} token={token} interactions={interactions} book={book} tag={tag} />
          : <></>
        }
      </main>

      <ReduxProvider>
        {interactions ? <InitializeInteractions interactions={interactions} /> : <></>}
      </ReduxProvider>
    </>
  );
}