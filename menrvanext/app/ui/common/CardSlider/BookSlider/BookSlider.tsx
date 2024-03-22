
import { fetchBooks } from "@/app/services/apiService";
import BookCard from "./BookCard";

interface BookSliderProps {}

const BookSlider: React.FC<BookSliderProps> = async ({}) => {
  const books = await fetchBooks();

  return (
    <div className="mt-16 flex w-[95%] flex-row items-end justify-start gap-4 overflow-scroll pb-3 md:pb-6">
      {books.map((book) => {
        return <BookCard key={book.id} book={book}></BookCard>;
      })}
    </div>
  );
};

export default BookSlider;
