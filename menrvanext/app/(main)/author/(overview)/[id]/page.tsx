import { fetchAuthorById } from "@/app/lib/services/apiService";
import AuthorPage from "@/app/ui/authorPage/authorPage";
import InitializeUserFollowsAuthor from "@/app/ui/authorPage/initializeUserFollowsAuthor";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page({ params: { id } }: { params: { id: number } }) {
  const fetchedAuthor = await fetchAuthorById(id);
  const token = cookies().get('jwt')?.value;
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      {fetchedAuthor ?
        <AuthorPage author={fetchedAuthor} id={id} token={token} />
        // * need to add error component here
        : <></>
      }
      {token ? <InitializeUserFollowsAuthor id={id} token={token} /> : <></>}
    </main>
  );
}
