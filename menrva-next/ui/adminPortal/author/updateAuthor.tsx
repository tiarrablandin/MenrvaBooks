"use client";

import { fetchAuthorById } from "@/lib/services/apiService";
import {
  Alert,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
  XMarkIcon,
} from "@/providers/coreProviders";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Series } from "@/lib/models/series";
import DefaultAlert from "@/ui/footer/alert";
import { Author } from "@/lib/models/author";

const UpdateAuthor: React.FC = () => {
  const router = useRouter();
  const searchParams = useParams();
  const id = searchParams?.id;
  const numericId = id ? parseInt(id as string, 10) : null;
  const [author, setAuthor] = useState<Author | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    async function fetchAuthor() {
      const fetchedAuthor = await fetchAuthorById(numericId!!);
      setAuthor(fetchedAuthor);
    }
    fetchAuthor();
  }, [numericId]);

  const handleClose = () => {
    router.back();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch(`http://localhost:8085/api/author/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(author),
    });

    const responseData = await response.json();
    setAuthor(responseData);

    if (response.ok) {
      // alert('Author saved successfully!');
      setIsAlertOpen(true);
      // router.back();
    } else {
      alert("Failed to save the author.");
    }
  };

  return (
    <>
      <Dialog open={true} handler={handleClose} className="container">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="justify-between pb-0">
            <p className="mb-1 font-bold text-2xl">Update Book</p>
            <XMarkIcon
              className="w-5 h-5 cursor-pointer text-black inline-block mr-1"
              onClick={handleClose}
            />
          </DialogHeader>
          <DialogBody className="overflow-y-scroll pt-0">
            <p className="font-normal text-gray-600 text-lg ">Update a author from the database.</p>
            <div className="flex gap-4 mt-6">PLACEHOLDER FOR ADD IMAGE</div>

            {/* <div className="flex flex-col gap-4 my-2">
              <SeriesDropdown
                onChange={(series: Series) => {
                  if (book) book.series = series;
                }}
                defaultValue={book?.series ? book?.series.name : ""}
              />
            </div> */}

            <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${author?.penName}`}
                  onChange={(e) => {
                    if (author) author.penName = e.target.value;
                  }}
                  label="Pen Name"
                  name="penName"
                />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${author?.bio}`}
                  onChange={(e) => {
                    if (author) author.bio = e.target.value;
                  }}
                  label="Bio"
                  name="bio"
                />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${author?.text}`}
                  onChange={(e) => {
                    if (author) author.text = e.target.value;
                  }}
                  label="Announcements"
                  name="text"
                />
              </div>
            </div>
          </DialogBody>
          <DialogFooter className="gap-2">
            <div className="-translate-y-24 container opacity-95">
              <DefaultAlert text="hello world" defaultIsOpen={isAlertOpen} />
            </div>
            <Button
              onClick={handleClose}
              color="red"
              variant="outlined"
              className="w-24 h-10 flex items-center justify-center border-2"
            >
              <p className="normal-case text-lg font-medium text-eggplant">Cancel</p>
            </Button>
            <Button type="submit" className="w-24 h-10 flex items-center justify-center">
              <p className="normal-case text-lg font-medium text-old-lace">Update</p>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default UpdateAuthor;
