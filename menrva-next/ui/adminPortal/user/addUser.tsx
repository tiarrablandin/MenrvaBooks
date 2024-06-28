"use client";

import { Subscription } from "@/lib/models/subscription";
import { AddUserRequest } from "@/lib/models/user";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Menu,
  Typography,
  XMarkIcon
} from "@/providers/coreProviders";
import { useRouter } from "next/navigation";
import React from "react";

const AddUser: React.FC = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData: AddUserRequest = {
      role: formData.get("role") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      tag: formData.get("tag") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      active: true,
      // subscription: formData.get("subscription") as Subscription,
    };

    const response = await fetch("http://localhost:8085/api/users`", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("User saved successfully!");
      router.back();
    } else {
      alert("Failed to save the user.");
    }
  };

  return (
    <>
      <Dialog open={true} handler={() => router.back()}>
        <form onSubmit={handleSubmit}>
          <DialogHeader className="justify-between pb-0">
            <Typography color="blue-gray" className="mb-1 font-bold text-2xl">
              Add User
            </Typography>
            <XMarkIcon
              className="w-5 h-5 cursor-pointer text-black inline-block mr-1"
              onClick={handleClose}
            />
          </DialogHeader>
          <DialogBody className="overflow-y-scroll pt-0">
            <Typography variant="lead" className="font-normal text-gray-600 text-lg ">
              Add a user to the database.
            </Typography>
            <div className="flex gap-4 mt-6">PLACEHOLDER FOR AVATAR</div>
            <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
              <div className="w-full">
                <Input
                  className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                  labelProps={{
                    className:
                      "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                  }}
                  type=""
                  size="lg"
                  placeholder="Role"
                  label="Role"
                  name="role"
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
                  placeholder="First Name"
                  label="First Name"
                  name="firstName"
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
                  placeholder="Last Name"
                  label="Last Name"
                  name="lastName"
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
                  placeholder="Tag"
                  label="Tag"
                  name="tag"
                />
              </div>
              <div className="w-full">
                <Input
                  className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                  labelProps={{
                    className:
                      "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                  }}
                  type="email"
                  size="lg"
                  placeholder="Email"
                  label="Email"
                  name="email"
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
                  type="password"
                  size="lg"
                  placeholder="Password"
                  label="Password"
                  name="password"
                />
              </div>
              <div className="w-full">
                <Input
                  className={`focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                  labelProps={{
                    className:
                      "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                  }}
                  type=""
                  size="lg"
                  placeholder="Subscription"
                  label="Subscription"
                  name="subscription"
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

export default AddUser;
