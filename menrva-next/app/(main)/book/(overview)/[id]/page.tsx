import { fetchBookById, fetchBookInteractionsById } from "@/lib/services/apiService";
import SingleBook from "@/ui/book/singleBook";
import { Metadata } from "next";
import { cookies } from "next/headers";

export async function generateMetadata(
  { params: { id } }: { params: { id: number } }): Promise<Metadata> {
    const book = await fetchBookById(id);
    const title = book?.title ? decodeURIComponent(book.title) : ""
  return {
    title: title
  }
}

export default async function Page({ params: { id } }: { params: { id: number } }) {
  const tag = cookies().get('tag')?.value as string;
  const token = cookies().get('jwt')?.value as string;

  const book = await fetchBookById(id);
  const interactions = token ? await fetchBookInteractionsById(id, token) : null;

  return (
    <>
      <main className="w-screen min-h-[calc(100vh-295px)]">
        {book ?
          <SingleBook id={id} token={token} interactions={interactions} book={book} tag={tag} />
          : <></>
        }
      </main>
    </>
  );
}