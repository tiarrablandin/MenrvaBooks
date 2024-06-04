import { fetchBooks } from "@/lib/services/apiService";
import BookSlider from "@/ui/book/bookSlider";
import Banner from "@/ui/home/banner";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  const theme = cookies().get('theme')?.value as string;
  const allBooks = await fetchBooks();

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <div className="w-screen h-full flex flex-col items-center">
        <Banner />
        {/* temporarily commenting out new releases */}
        {/* <BookSlider fetchData={fetchNewReleasesSlider} title={"New Releases"} /> */}
        <div className="w-[95%]">
          <BookSlider defaultBooks={allBooks} title={"All Books"} />
        </div>
      </div>
    </main>
  );
}
