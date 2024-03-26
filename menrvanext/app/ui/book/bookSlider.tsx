'use client';

import { Typography } from "@/providers";
import { Lusitana } from "next/font/google";
import { BookResponse } from "../../lib/models/book";
import BookCard from "./bookCard";
import { useEffect, useState } from "react";
import BookSkeleton from "./bookSkeleton";

interface BookSliderProps {
  fetchData: () => Promise<BookResponse[]>;
  title: string;
}

const lusi = Lusitana({ subsets: ["latin"], weight: "400" });

const BookSlider: React.FC<BookSliderProps> = ({ fetchData, title }) => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const fetchedBooks = await fetchData();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Failed to fetch books: ", error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [fetchData]);

  return (
    <>
      <Typography
        color="white"
        variant="h1"
        className={`${lusi.className} self-start ml-16 mt-10`}
      >
        {title}
      </Typography>
      <div className="mt-6 flex w-[95%] items-end justify-start gap-4 overflow-scroll pb-3 md:pb-6">
        {isLoading
          ? Array(10) // Assuming you want 5 skeletons
            .fill(0)
            .map((_, index) => <BookSkeleton key={index} />)
          : books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </>
  );
};

export default BookSlider;