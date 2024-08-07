import { fetchAuthorById, fetchUserFollowsAuthor } from "@/lib/services/apiService";
import AuthorPage from "@/ui/authorPage/authorPage";
import InitializeUserFollowsAuthor from "@/lib/utils/initializeUserFollowsAuthor";
import { Metadata } from "next";
import { cookies } from "next/headers";
import ReduxProvider from "@/providers/reduxProvider";

export async function generateMetadata(
  { params: { id } }: { params: { id: number } }): Promise<Metadata> {
    const author = await fetchAuthorById(id);
    const name = author?.penName? decodeURIComponent(author.penName) : ""
  return {
    title: name
  }
}

export default async function Page({ params: { id } }: { params: { id: number } }) {
  const fetchedAuthor = await fetchAuthorById(id);
  const token = cookies().get('jwt')?.value;
  const isFollowing = token ? await fetchUserFollowsAuthor(id, token) : false;

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      {fetchedAuthor && isFollowing !== null ?
        <AuthorPage author={fetchedAuthor} id={id} token={token} isFollowing={isFollowing} />
        // * need to add error component here
        : <></>
      }

      <ReduxProvider>
        {token ? <InitializeUserFollowsAuthor isFollowing={isFollowing ? isFollowing : false} /> : <></>}
      </ReduxProvider>
    </main>
  );
}
