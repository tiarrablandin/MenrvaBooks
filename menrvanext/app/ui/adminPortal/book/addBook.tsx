'use client';

import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Option, Select, Textarea, TrashIcon, Typography, XMarkIcon } from "@/providers";
import { useRouter } from 'next/navigation';
import React from 'react';

const AddBook: React.FC = () => {
    const router = useRouter();
    const handleClose = () => { router.back(); }

    return (
        <section className="grid place-items-center h-screen">
            <Dialog size='xl' open={true} handler={handleClose} >
                <DialogHeader className="justify-between pb-0">
                    <Typography color="blue-gray" className="mb-1 font-bold">
                        Add Book
                    </Typography>
                    <XMarkIcon className="w-5 h-5 cursor-pointer text-black inline-block mr-1" onClick={handleClose} />
                </DialogHeader>
                <DialogBody className="overflow-y-scroll pt-0">
                    <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                    >
                        Edit product features and save it.
                    </Typography>
                    <div className="flex gap-4 mt-6">
                        PLACEHOLDER FOR ADD IMAGE
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-1 font-medium"
                            >
                                Product Name
                            </Typography>
                            <Input
                                className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                                labelProps={{
                                    className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                                }}
                                type="text"
                                size="lg"
                                placeholder="Search for books, authors, genres..."
                                label="Search"
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-1 font-medium"
                            >
                                Category
                            </Typography>
                            <Select
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                            >
                                <Option>Device 1</Option>
                                <Option>Device 2</Option>
                                <Option>Device 3</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-4 my-4">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-1 font-medium"
                            >
                                Price
                            </Typography>
                            <Input
                                color="gray"
                                placeholder="$1,900"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-1 font-medium"
                            >
                                Brand
                            </Typography>
                            <Select
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                            >
                                <Option>Microsoft</Option>
                                <Option>Andriod</Option>
                                <Option>Windows</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-1 font-medium"
                        >
                            Description
                        </Typography>
                        <Textarea
                            rows={6}
                            placeholder="Description"
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                    <div className="w-full mt-2">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-1 font-medium"
                        >
                            Tags
                        </Typography>
                        <Input
                            color="gray"
                            placeholder="Add up to 10 tags, separated by commas"
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                </DialogBody>
                <DialogFooter className="gap-2">
                    <Button onClick={handleClose} color="red" variant="outlined" className="normal-case text-xs">
                        Cancel
                    </Button>
                    <Button>update product</Button>
                </DialogFooter>
            </Dialog>
        </section>
    );
}

export default AddBook;


function ImageCard() {
    return (
        <>
            <div className="relative rounded-lg lg:h-40 md:h-36 h-24 w-full bg-[url('https://www.material-tailwind.com/image/dark-image.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex w-full h-full !items-end !justify-end p-1">
                    <IconButton size="sm" variant="text">
                        <TrashIcon className="w-5 h-5 text-gray-500" />
                    </IconButton>
                </div>
            </div>
        </>
    );
}