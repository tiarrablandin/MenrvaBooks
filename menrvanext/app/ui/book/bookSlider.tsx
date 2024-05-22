"use client";

import { Typography } from "@/providers";
import { Comic_Neue } from "next/font/google";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BookResponse } from "../../lib/models/book";
import BookCard from "./bookCard";
import BookSkeleton from "./bookSkeleton";
import { useRouter } from "next/navigation";

interface BookSliderProps {
  fetchData?: () => Promise<BookResponse[] | null>;
  title: string;
  defaultBooks?: BookResponse[];
}

const neue = Comic_Neue({ subsets: ["latin"], weight: "400" });

const BookSlider: React.FC<BookSliderProps> = ({ fetchData, title, defaultBooks }) => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(10);
  const sliderRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter();

  const enableDragScroll = (node: HTMLDivElement) => {
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = (e: MouseEvent) => {
      pos = {
        left: node.scrollLeft,
        top: node.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
      setIsDragging(false); // Assume no dragging initially
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!isMoving) {
        setIsDragging(true); // Set dragging true only if movement starts
        setIsMoving(true); // Update flag indicating movement started
      }
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      node.scrollTop = pos.top - dy;
      node.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      if (isMoving) {
        setIsDragging(false); // Reset dragging state only here
        setIsMoving(false); // Reset movement flag
      }
    };

    node.addEventListener('mousedown', mouseDownHandler);

    return () => {
      node.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  };

  useEffect(() => {
    const node = sliderRef.current;
    if (node) {
      const cleanupDragScroll = enableDragScroll(node);
      return () => {
        cleanupDragScroll();
      };
    }
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        if (fetchData) {
          const fetchedBooks = await fetchData();
          if (fetchedBooks) setBooks(fetchedBooks);
        }
      } catch (error) {
        console.error("Failed to fetch books: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [fetchData]);

  useEffect(() => {
    if (defaultBooks) {
      setBooks(defaultBooks);
      setIsLoading(false);
    }
  }, [defaultBooks])

  const handleScroll = useCallback(() => {
    const node = sliderRef.current;
    if (node) {
      const { scrollLeft, clientWidth, scrollWidth } = node;
      if (scrollWidth - scrollLeft === clientWidth && displayLimit < books.length) {
        setDisplayLimit(prevLimit => prevLimit + 10);
      }
    }
  }, [displayLimit, books.length]);

  useEffect(() => {
    const node = sliderRef.current;
    if (node) {
      node.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (node) {
        node.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);


  return (
    <>
      <Typography variant="h2" className={`${neue.className} text-2xl self-start ml-8 my-4`}>
        {title}
      </Typography>
      <div ref={sliderRef} className="flex w-[95%] items-end justify-start gap-4 overflow-scroll pb-3 md:pb-6">
        {isLoading
          ? Array(10)
            .fill(0)
            .map((_, index) => <BookSkeleton key={index} />)
          : books.slice(0, displayLimit).map((book) => (
            // <Link href={`../book/${book.id}`} key={book.id} className={`${(isDragging) ? 'pointer-events-none' : ''}`}>
              <div onClick={() => { if (!isDragging) (router.push(`../book/${book.id}`)) }} key={book.id} className="w-full h-full cursor-pointer">
                <BookCard book={book} key={book.id} />
              </div>
              // {/* </Link> */}
          ))}
            </div>
    </>
      );
};

      export default BookSlider;
