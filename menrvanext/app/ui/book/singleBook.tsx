"use client";

import { BookResponse } from "@/app/lib/models/book";
import { fetchBookById, fetchBooks } from "@/app/lib/services/apiService";
import {
  Card,
  ThumbDown,
  ThumbDownAltOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
  Typography,
} from "@/providers";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookSlider from "./bookSlider";
import BookComments from "./bookComments";

const SingleBook: React.FC = ({}) => {
  const searchParams = useParams();
  const id = searchParams?.id;
  const numericId = id ? parseInt(id as string, 10) : null;
  const [book, setBook] = useState<BookResponse | null>(null);

  useEffect(() => {
    async function fetchBook() {
      const fetchedBook = await fetchBookById(numericId!!);
      setBook(fetchedBook);
    }
    fetchBook();
  }, [numericId]);

  async function fetchAllBooksSlider() {
    return fetchBooks();
  }

  return (
    <>
      <div className="flex m-8 gap-8">
        {book?.cover ? (
          <Image src={`${book?.cover}`} width={360} height={720} alt="" className="rounded-md" />
        ) : (
          <></>
        )}
        <Card className="bg-transparent shadow-none">
          <Typography variant="h2" className="">
            {book ? book.title : "Loading..."}
          </Typography>
          {(book?.authors || []).map((author) => (
            <Link href={`../author/${author.id}`} key={author.id}>
              <Typography variant="small" className="hover:underline underline-offset-2">
                {author.penName}
              </Typography>
            </Link>
          ))}
          <div className="flex mt-2 gap-4">
            <ThumbUp />
            <ThumbUpAltOutlined />
            <ThumbDown />
            <ThumbDownAltOutlined />
          </div>
          <Typography className="mt-6">{book ? book.description : "Loading..."}</Typography>
          <div className="flex justify-center gap-12 mt-8">
            <div className="text-center">
              <Typography>Page Count:</Typography>
              <Typography variant="h6" className="">
                {book ? ` ${book.pageCount}` : "Loading..."}
              </Typography>
            </div>
            <div className="text-center">
              <Typography>Publication Date:</Typography>
              <Typography variant="h6" className="">
                {book?.publicationDate ? book.publicationDate.toString() : ""}
              </Typography>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-screen h-full flex flex-col items-center">
        <BookSlider fetchData={fetchAllBooksSlider} title={"Books in Series"} />
        <BookSlider fetchData={fetchAllBooksSlider} title={"Similar Books"} />
      </div>
      <BookComments />
    </>
  );
};

export default SingleBook;
