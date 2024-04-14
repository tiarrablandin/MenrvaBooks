"use client";

import { BookResponse } from "@/app/lib/models/book";
import { fetchBookById, fetchBooks } from "@/app/lib/services/apiService";
import { Card, Typography } from "@/providers";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookSlider from "../book/bookSlider";
import AdvancedSearchComponent from "../search/advancedSearch";
import Link from "next/link";

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
          <Typography className="mt-6">{book ? book.description : "Loading..."}</Typography>
          <div className="flex gap-12 mt-8">
            <Typography variant="h2" className="">
              {book ? `Page Count : ${book.pageCount}` : "Loading..."}
            </Typography>
            <Typography variant="h2" className="">
              {book?.publicationDate ? book.publicationDate.toString() : ""}
            </Typography>
          </div>
        </Card>
      </div>
      <div className="w-screen h-full flex flex-col items-center">
        <BookSlider fetchData={fetchAllBooksSlider} title={"Books in Series"} />
        <BookSlider fetchData={fetchAllBooksSlider} title={"Similar Books"} />
      </div>
      {/* COMMENTS GO HERE */}
    </>
  );
};

export default SingleBook;
