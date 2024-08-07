import { fetchSearchResults } from "@/lib/services/apiService";
import { Typography } from "@/providers/coreProviders";
import SearchResults from "@/ui/search/searchResults";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks | Search",
};

export default async function Page({ params: { query } }: { params: { query: string } }) {
  const books = await fetchSearchResults(query);

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <div className="h-full w-full flex flex-col items-center justify-center py-4">
        <p className="w-4/5 mt-2 text-left text-eggplant dark:text-parchment/70 text-3xl font-semibold">Results for: {query}</p>
        <SearchResults books={books ? books : []} />
      </div>
    </main>
  );
}
