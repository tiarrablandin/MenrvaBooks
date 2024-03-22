import { fetchBooks } from "@/app/services/apiService";
import BookCard from "./BookCard";
import { Typography } from "@/providers";
import { Lusitana } from "next/font/google";

interface BookSliderProps { }

const lusi = Lusitana({ subsets: ["latin"], weight: "400" });

const BookSlider: React.FC<BookSliderProps> = async ({ }) => {
  const books = await fetchBooks();

  return (
    <>
      <Typography color="white" variant="h1" className={`${lusi.className} self-start ml-16 mt-6`}>All Books</Typography>
      <div className="mt-10 flex w-[95%] flex-row items-end justify-start gap-4 overflow-scroll pb-3 md:pb-6">
        {books.map((book) => {
          return <BookCard key={book.id} book={book}></BookCard>;
        })}
      </div>
    </>
  );
};

export default BookSlider;
