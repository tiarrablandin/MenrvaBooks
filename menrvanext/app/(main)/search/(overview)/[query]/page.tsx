import { fetchSearchResults } from "@/app/lib/services/apiService";
import SearchResults from "@/app/ui/search/searchResults";
import { Typography } from "@/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks | Search",
};

export default async function Page({ params: { query } }: { params: { query: string } }) {
  const books = await fetchSearchResults(query);

  return (
    <main className="w-screen min-h-[calc(100vh-295px)] h-[calc(100vh-295px)]">
      <div className="h-full w-full flex flex-col items-center justify-center py-4">
        <Typography className="w-4/5 mt-2 text-left text-eggplant text-3xl font-semibold">Results for: {query}</Typography>
        <SearchResults books={books ? books : []} />
      </div>
    </main>
  );
}
