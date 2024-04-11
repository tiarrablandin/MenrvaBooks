"use client";

import { BookResponse } from "@/app/lib/models/book";
import { fetchBookById, fetchBooks } from "@/app/lib/services/apiService";
import { Card, Typography } from "@/providers";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookSlider from "../book/bookSlider";
import AdvancedSearchComponent from "../search/advancedSearch";

const SingleBook: React.FC = ({}) => {
  const searchParams = useParams();
  const id = searchParams.id;
  const numericId = id ? parseInt(id as string, 10) : null;
  const [book, setBook] = useState<BookResponse | null>(null);

  useEffect(() => {
    async function fetchBook() {
      const fetchedBook = await fetchBookById(numericId!!);
      setBook(fetchedBook);
    }
    fetchBook();
  }, [id]);

  async function fetchAllBooksSlider() {
    return fetchBooks();
  }

  return (
    <>
      <div className="flex justify-center">
        <AdvancedSearchComponent />
      </div>
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
            <Typography key={author.id} variant="lead" className="">
              {author.penName}
            </Typography>
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
        <BookSlider fetchData={fetchAllBooksSlider} title={"All Books"} />
      </div>
      {/* COMMENTS GO HERE */}
    </>
  );
};

export default SingleBook;
