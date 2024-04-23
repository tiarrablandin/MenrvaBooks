"use client";

import { BookResponse } from "@/app/lib/models/book";
import { fetchBooks } from "@/app/lib/services/apiService";
import { Button, Switch, Typography } from "@/providers";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "../pagination";
import AdminTable2 from "./adminTable";
import { renderBookRow } from "./tableRows";
import { useBooks } from "@/app/lib/hooks/useBooks";

const BookTable: React.FC = () => {
  const { data, fetchData, toggleReviewed } = useBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
  const currentItems = data
    .filter((book) => !showUnreviewedOnly || !book.reviewed)
    .slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = data.filter((book) => !showUnreviewedOnly || !book.reviewed).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    fetchData();
  }, []);

  const head = "Books List";
  const headDesc = "See information about all books";
  const addBook = (
    <Link href="/admin/addBook">
      <Button className="md:max-w-fit w-full bg-eggplant">add book</Button>
    </Link>
  );
  const reviewedItems = (
    <Switch
      checked={showUnreviewedOnly}
      onChange={(e) => setShowUnreviewedOnly(e.target.checked)}
      label={
        <Typography variant="lead">
          Reviewed
        </Typography>
      }
      className="before:h-8 before:w-8 checked:bg-eggplant"
    />
  );
  const tableHeaders = ["Cover", "Title", "Author", "Date Added", "Reviewed", "Edit"];


  return (
    <div>
      <AdminTable2
        head={head}
        headDesc={headDesc}
        add={addBook}
        reviewedToggle={reviewedItems}
        tableHeaders={tableHeaders}
        data={currentItems}
        renderRow={renderBookRow}
        pagination={<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />}
        reviewedCallback={toggleReviewed}
      />
    </div>
  );
};

export default BookTable;
