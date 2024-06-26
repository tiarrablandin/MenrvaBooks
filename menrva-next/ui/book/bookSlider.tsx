"use client";

import useDragScroll from "@/lib/hooks/useDragScroll";
import useFetchBooks from "@/lib/hooks/useFetchBooks";
import useInfiniteScroll from "@/lib/hooks/useInfiniteScroll";
import { Comic_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { BookResponse } from "../../lib/models/book";
import BookCard from "./bookCard";
import BookSkeleton from "./bookSkeleton";

interface BookSliderProps {
  fetchData?: () => Promise<BookResponse[] | null>;
  title: string;
  defaultBooks?: BookResponse[] | null;
}

const neue = Comic_Neue({ subsets: ["latin"], weight: "400" });

const BookSlider: React.FC<BookSliderProps> = ({ fetchData, title, defaultBooks }) => {
  const { ref, isDragging, isMoving } = useDragScroll();
  const { books, isLoading } = useFetchBooks(fetchData, defaultBooks);
  const [displayLimit, setDisplayLimit] = useState(13);
  const router = useRouter();

  const increaseLimit = useCallback(() => {
    if (displayLimit < books.length) {
      setDisplayLimit(prevLimit => prevLimit + 10);
    }
  }, [displayLimit, books.length]);

  useInfiniteScroll(ref, books.length, increaseLimit);


  return (
    <>
      <p className={`${neue.className} text-2xl self-start ml-4 my-4 text-eggplant dark:text-rose`}>
        {title}
      </p>
      <div ref={ref} className="flex items-end justify-start gap-4 overflow-scroll max-w-full mx-4 mr-auto pb-3 md:pb-6">
        {isLoading
          ? Array(10)
            .fill(0)
            .map((_, index) => <BookSkeleton key={index} />)
          : books.slice(0, displayLimit).map((book) => (
            // TODO Drag scroll doesn't work properly
            <div onClick={() => { if (!isDragging || !isMoving) (router.push(`../book/${book.id}`)) }} key={book.id} className="w-full h-full cursor-pointer">
              <BookCard book={book} key={book.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default BookSlider;
