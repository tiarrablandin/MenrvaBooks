"use client";

import { BookResponse } from "@/app/lib/models/book";
import AdminTable2 from "./adminTable2";
import { useEffect, useState } from "react";
import { fetchBooks } from "@/app/lib/services/apiService";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/providers";
import Pagination from "../pagination";

const BookTable: React.FC = () => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
  const currentItems = books
    .filter((book) => !showUnreviewedOnly || !book.reviewed)
    .slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = books.filter((book) => !showUnreviewedOnly || !book.reviewed).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    async function fetchAllBooks() {
      const books = await fetchBooks();
      console.log(books);
      setBooks(books);
      return books;
    }
    fetchAllBooks();
  }, []);

  const toggleReviewed = async (bookId: number) => {
    try {
      const response = await fetch(`http://localhost:8085/api/books/${bookId}/toggle-reviewed`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to toggle reviewed status");
      }
      const updatedBook = await response.json();
      setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    } catch (error) {
      console.error("Error toggling reviewed status: ", error);
    }
  };

  const head = "Books List";
  const headDesc = "See information about all books";
  // const add = ;
  // const reviewedItems = [];
  const tableHeaders = ["Cover", "Title", "Author", "Date Added", "Reviewed", "Edit"];
  const renderBookRow = (book: BookResponse, index: number) => (
    <tr key={index}>
      <td>
        <Link href={`../book/${book.id}`}>
          <Image
            className="rounded-md object-center h-[6rem] w-[4rem]"
            src={book.cover}
            width={340}
            height={680}
            alt=""
          />
        </Link>
      </td>
      <td>
        <Link href={`../book/${book.id}`} className="hover:underline">{book.title}</Link>
      </td>
      <td>
        {book.authors[0] ? (
          <Link href={`../author/${book.authors[0].id}`}>
            <Typography variant="small" className="hover:underline underline-offset-2">
              {book.authors[0].penName}
            </Typography>
          </Link>
        ) : (
          ""
        )}
      </td>
      <td>{book.dateAdded.toString()}</td>
    </tr>
  );
  const pagination = () => (
    <Pagination totalPages={totalItems} currentPage={currentPage} onPageChange={setCurrentPage} />
  );
  const paginationComponent = pagination();

  return (
    <div>
      <AdminTable2
        head={head}
        headDesc={headDesc}
        // add={}
        // reviewedItems={toggleReviewed}
        tableHeaders={tableHeaders}
        data={books}
        renderRow={renderBookRow}
        pagination={paginationComponent}
      />
    </div>
  );
};

export default BookTable;
