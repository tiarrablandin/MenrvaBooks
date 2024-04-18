'use client';

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  DialogFooter,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { ArrowUpTrayIcon, TrashIcon } from "@heroicons/react/24/solid";

function ImageCard1() {
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

export function Modal5() {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <section className="grid place-items-center h-screen">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Dialog className="p-4" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between pb-0">
          <Typography color="blue-gray" className="mb-1 font-bold">
            Update Product Modal
          </Typography>
          <IconButton
            color="gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pt-0">
          <Typography
            variant="small"
            className="font-normal text-gray-600"
          >
            Edit product features and save it.
          </Typography>
          <div className="flex gap-4 mt-6">
            <ImageCard1 />
            <ImageCard1 />
            <ImageCard1 />
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
                color="gray"
                placeholder="Laptop"
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
              Descriptoin
            </Typography>
            <Textarea
              rows={6}
              placeholder="Descriptoin"
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
          <Button onClick={handleOpen} color="red" variant="outlined">
            delist product
          </Button>
          <Button>update product</Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}

interface MembersProps {
  img: string;
  name: string;
  size: string;
}

function ImageCard({ img, name, size }: MembersProps) {
  return (
    <div className="border p-3 rounded-lg w-full">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt="dark"
            className="w-[70px] h-[50px] rounded-lg"
          />
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="!font-bold mb-1"
            >
              {name}
            </Typography>
            <Typography
              variant="small"
              className="!font-normal text-gray-600"
            >
              {size}
            </Typography>
          </div>
        </div>
        <IconButton size="sm" variant="text">
          <TrashIcon className="w-5 h-5 text-gray-500" />
        </IconButton>
      </div>
    </div>
  );
}

const data = [
  {
    img: "https://www.material-tailwind.com/image/dark-image.png",
    name: "cover-1.jpg",
    size: "140 KB",
  },
  {
    img: "https://www.material-tailwind.com/image/dark-image.png",
    name: "cover-2.jpg",
    size: "288 KB",
  },
];

export function Modal4() {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <section className="grid place-items-center h-screen">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Dialog className="p-4" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between pb-0">
          <Typography color="blue-gray" className="mb-1 font-bold">
            Upload Files
          </Typography>
          <IconButton
            color="gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pt-0">
          <Typography
            variant="small"
            className="font-normal text-gray-600"
          >
            Easily upload files to your account with just a few clicks.
          </Typography>
          <label
            htmlFor="upload"
            className="grid place-items-center py-10 rounded-lg border border-dashed border-gray-300 mt-6"
          >
            <input type="file" id="upload" className="hidden" />
            <IconButton variant="text" className="mb-4">
              <ArrowUpTrayIcon
                className="h-8 w-8 text-gray-900"
                strokeWidth={2}
              />
            </IconButton>
            <Typography color="blue-gray" className="mb-1 font-bold">
              Drag and Drop or{" "}
              <a href="#" className="underline">
                Choose a Local File
              </a>
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-gray-600"
            >
              Supported formats: .png, .jpg, .svg
            </Typography>
          </label>
          <div className="mt-4 flex flex-col md:flex-row justify-between gap-4">
            {data.map(({ img, name, size }) => (
              <ImageCard key={name} img={img} name={name} size={size} />
            ))}
          </div>
        </DialogBody>
        <DialogFooter className="gap-2">
          <Button onClick={handleOpen} variant="outlined">
            Cancel
          </Button>
          <Button>submit</Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}