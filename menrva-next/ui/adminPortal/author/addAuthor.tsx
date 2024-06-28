"use client";

import { AddAuthorRequest } from "@/lib/models/author";
import {
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
import { useRouter } from "next/navigation";
import React from "react";

const AddAuthor: React.FC = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const authorData: AddAuthorRequest = {
      photo: formData.get("photo") as string,
      penName: formData.get("penName") as string,
      bio: formData.get("bio") as string,
      text: formData.get("text") as string,
    };

    const response = await fetch("http://localhost:8085/api/authors`", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authorData),
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("Author saved successfully!");
      router.back();
    } else {
      alert("Failed to save the author.");
    }
  };

  return (
    <>
      <Dialog open={true} handler={() => router.back()}>
        <form onSubmit={handleSubmit}>
          <DialogHeader className="justify-between pb-0">
            <Typography color="blue-gray" className="mb-1 font-bold text-2xl">
              Add Author
            </Typography>
            <XMarkIcon
              className="w-5 h-5 cursor-pointer text-black inline-block mr-1"
              onClick={handleClose}
            />
          </DialogHeader>
          <DialogBody className="overflow-y-scroll pt-0">
            <Typography variant="lead" className="font-normal text-gray-600 text-lg ">
              Add a author to the database.
            </Typography>
            <div className="flex gap-4 mt-6">PLACEHOLDER FOR ADD IMAGE</div>
            <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
              <div className="w-full">
                <Input
                  className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                  labelProps={{
                    className:
                      "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                  }}
                  type="text"
                  size="lg"
                  placeholder="Pen Name"
                  label="Pen Name"
                  name="penName"
                />
              </div>
              <div className="w-full">
                <Input
                  className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                  labelProps={{
                    className:
                      "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                  }}
                  type="text"
                  size="lg"
                  placeholder="Bio"
                  label="Bio"
                  name="bio"
                />
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-4 my-4">
              <div className="w-full">
                <Input
                  className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                  labelProps={{
                    className:
                      "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                  }}
                  type="text"
                  size="lg"
                  placeholder="Announcements"
                  label="Announcements"
                  name="text"
                />
              </div>
            </div>
          </DialogBody>
          <DialogFooter className="gap-2">
            <Button
              onClick={handleClose}
              color="red"
              variant="outlined"
              className="w-24 h-10 flex items-center justify-center border-2"
            >
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
};

export default AddAuthor;
