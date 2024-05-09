'use client';

import { BookResponse, UpdateBookRequest } from "@/app/lib/models/book";
import { fetchBookById } from "@/app/lib/services/apiService";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea, Typography, XMarkIcon } from "@/providers";
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SeriesDropdown from "./seriesDropdown";
import { Series } from "@/app/lib/models/series";

const UpdateBook: React.FC = () => {
  const router = useRouter();
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

  const handleClose = () => { router.back(); }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget);
    // const bookData: UpdateBookRequest = {
    //   title: formData.get('title') as string,
    //   description: formData.get('description') as string,
    //   pageCount: parseInt(formData.get('pageCount') as string),
    //   publicationDate: new Date(formData.get('publicationDate') as string),
    //   cover: formData.get('cover') as string,
    //   series: formData.get('')
    // };
    console.log("************** " + JSON.stringify(book));

    const response = await fetch(`http://localhost:8085/api/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    const responseData = await response.json();
    console.log(responseData);

    if (response.ok) {
      alert('Book saved successfully!');
      router.back();
    } else {
      alert('Failed to save the book.');
    }
  };

  return (
    <>
      <Dialog open={true} handler={handleClose} >
        <form onSubmit={handleSubmit}>
          <DialogHeader className="justify-between pb-0">
            <Typography color="blue-gray" className="mb-1 font-bold text-2xl">
              Update Book
            </Typography>
            <XMarkIcon className="w-5 h-5 cursor-pointer text-black inline-block mr-1" onClick={handleClose} />
          </DialogHeader>
          <DialogBody className="overflow-y-scroll pt-0">
            <Typography
              variant="lead"
              className="font-normal text-gray-600 text-lg "
            >
              Update a book from the database.
            </Typography>
            <div className="flex gap-4 mt-6">
              PLACEHOLDER FOR ADD IMAGE
            </div>

            <div className="flex flex-col gap-4 my-2">
              {book?.series ? <SeriesDropdown onChange={(series: Series) => { if (book) book.series = series }} defaultValue={book?.series.name} />
                : <Typography>Loading...</Typography>}

              <Input
                type="text"
                size="lg"
                value={`${book?.authors[0].penName}`}
                onChange={(e) => { if (book) book.authors[0].penName = e.target.value }}
                label="Author's Pen Name"
              >
              </Input>
            </div>

            <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${book?.title}`}
                  onChange={(e) => { if (book) book.title = e.target.value }}
                  label="Title"
                  name="title"
                />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${book?.cover}`}
                  onChange={(e) => { if (book) book.cover = e.target.value }}
                  label="Cover URL"
                  name="cover"
                />
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-4 my-4">
              <div className="w-full">
                <Input
                  className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                  labelProps={{
                    className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                  }}
                  type="number"
                  size="lg"
                  value={`${book?.pageCount}`}
                  onChange={(e) => { if (book) book.pageCount = parseInt(e.target.value) }}
                  label="Page Count"
                  name="pageCount"
                />
              </div>
              <div className="w-full">
                <Input
                  type="number"
                  size="lg"
                  name="isbn"
                  value={`${book?.isbn}`}
                  onChange={(e) => { if (book) book.isbn = parseInt(e.target.value) }}
                  label="ISBN"
                />
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-4 my-4">
              <div className="w-full">
                <Input
                  label="Publication Date"
                  size="lg"
                  value={`${book?.publicationDate}`}
                  onChange={(e) => { if (book) book.publicationDate = new Date(e.target.value) }}
                  type="date"
                  name="publicationDate"
                />
              </div>
            </div>
            <div>
              <Textarea
                rows={6}
                placeholder=""
                size="lg"
                label="Description"
                name="description"
                value={`${book?.description}`}
                onChange={(e) => { if (book) book.description = e.target.value }}
              />
            </div>
            {/* <div className="w-full mt-2">
                            <Input
                                placeholder="Add up to 10 tags, separated by commas"
                                label="Tags"
                                labelProps={{
                                    className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                                }}
                                className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                            />
                        </div> */}
          </DialogBody>
          <DialogFooter className="gap-2">
            <Button onClick={handleClose} color="red" variant="outlined" className="w-24 h-10 flex items-center justify-center border-2">
              <Typography className="normal-case text-lg font-medium text-eggplant">
                Cancel
              </Typography>
            </Button>
            <Button type="submit" className="w-24 h-10 flex items-center justify-center">
              <Typography className="normal-case text-lg font-medium text-old-lace">
                Update
              </Typography>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

export default UpdateBook;