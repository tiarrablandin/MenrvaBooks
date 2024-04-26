'use client';

import { BookResponse, UpdateBookRequest } from "@/app/lib/models/book";
import { fetchBookById } from "@/app/lib/services/apiService";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea, Typography, XMarkIcon } from "@/providers";
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
        const bookData: UpdateBookRequest = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            pageCount: parseInt(formData.get('pageCount') as string),
            publicationDate: new Date(formData.get('publicationDate') as string),
            cover: formData.get('cover') as string,
        };

        const response = await fetch(`http://localhost:8085/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
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
                        <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
                            <div className="w-full">
                                <Input
                                    className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                                    labelProps={{
                                        className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                                    }}
                                    type="text"
                                    size="lg"
                                    placeholder={`${book?.title}`}
                                    label="Title"
                                    name="title"
                                />
                            </div>
                            <div className="w-full">
                                <Input
                                    className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                                    labelProps={{
                                        className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                                    }}
                                    type="text"
                                    size="lg"
                                    placeholder={`${book?.cover}`}
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
                                    placeholder={`${book?.pageCount}`}
                                    label="Page Count"
                                    name="pageCount"
                                />
                            </div>
                            <div className="w-full">
                                <Input
                                    className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                                    labelProps={{
                                        className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                                    }}
                                    type="number"
                                    size="lg"
                                    name="isbn"
                                    placeholder={`${book?.isbn}`}
                                    label="ISBN"
                                />
                            </div>
                        </div>
                        <div className="flex items-center flex-col md:flex-row gap-4 my-4">
                            <div className="w-full">
                                <Input
                                    label="Publication Date"
                                    placeholder={`${book?.publicationDate}`}
                                    type="date"
                                    labelProps={{
                                        className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                                    }}
                                    className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                                    name="publicationDate"
                                />
                            </div>
                        </div>
                        <div>
                            <Textarea
                                rows={6}
                                placeholder=""
                                label="Description"
                                name="description"
                                labelProps={{
                                    className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                                }}
                                className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
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