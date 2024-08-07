import { fetchBooks } from "@/lib/services/apiService";
import BookSlider from "@/ui/book/bookSlider";
import Banner from "@/ui/home/banner";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Home ",
};

export default async function Page() {
  const theme = cookies().get('theme')?.value as string;
  const allBooks = await fetchBooks();

  return (
    <main className="w-screen min-h-[calc(100vh-13.75rem)] h-full">
      <div className="w-screen h-full flex flex-col items-center text-old-lace">
        <div className="w-full">
          <Banner />
        </div>
        {/* temporarily commenting out new releases */}
        {/* <BookSlider fetchData={fetchNewReleasesSlider} title={"New Releases"} /> */}
        <div className="w-[95%]">
          <BookSlider defaultBooks={allBooks} title={"All Books"} />
        </div>
      </div>
    </main>
  );
}
