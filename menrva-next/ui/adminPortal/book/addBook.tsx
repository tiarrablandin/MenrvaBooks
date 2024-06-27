'use client';

<<<<<<< HEAD
import { AddBookRequest } from "@/lib/models/book";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea, Typography, XMarkIcon } from "@/providers/coreProviders";
=======
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea, Typography, XMarkIcon } from "@/providers/coreProviders";
import { AddBookRequest } from "@/lib/models/book";
>>>>>>> 11c08824c0c96eb2c0235af91819d12175862dde
import { useRouter } from 'next/navigation';
import React from 'react';

const AddBook: React.FC = () => {
    const router = useRouter();
    const handleClose = () => { router.back(); }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const bookData: AddBookRequest = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            pageCount: parseInt(formData.get('pageCount') as string),
            publicationDate: new Date(formData.get('publicationDate') as string),
            cover: formData.get('cover') as string,
            views: 0,
        };

        const response = await fetch('http://localhost:8085/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });

        const responseData = await response.json();

        if (response.ok) {
            alert('Book saved successfully!');
            router.back();
        } else {
            alert('Failed to save the book.');
        }
    };

    return (
        <>
            <Dialog open={true} handler={() => router.back()}>
                <form onSubmit={handleSubmit}>
                    <DialogHeader className="justify-between pb-0">
                        <Typography color="blue-gray" className="mb-1 font-bold text-2xl">
                            Add Book
                        </Typography>
                        <XMarkIcon className="w-5 h-5 cursor-pointer text-black inline-block mr-1" onClick={handleClose} />
                    </DialogHeader>
                    <DialogBody className="overflow-y-scroll pt-0">
                        <Typography
                            variant="lead"
                            className="font-normal text-gray-600 text-lg "
                        >
                            Add a book to the database.
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
                                    placeholder="Title"
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
                                    placeholder="Cover"
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
                                    placeholder="0"
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
                                    placeholder="ISBN"
                                    label="ISBN"
                                />
                            </div>
                        </div>
                        <div className="flex items-center flex-col md:flex-row gap-4 my-4">
                            <div className="w-full">
                                <Input
                                    label="Publication Date"
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
                                Create
                            </Typography>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
}

export default AddBook;