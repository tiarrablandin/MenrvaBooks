"use client";

import { User } from "@/lib/models/user";
import { fetchUserById } from "@/lib/services/apiService";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  XMarkIcon,
} from "@/providers/coreProviders";
import DefaultAlert from "@/ui/footer/alert";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateUser: React.FC = () => {
  const router = useRouter();
  const searchParams = useParams();
  const id = searchParams?.id;
  const numericId = id ? parseInt(id as string, 10) : null;
  const [user, setUser] = useState<User | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const fetchedUser = await fetchUserById(numericId!!);
      setUser(fetchedUser);
    }
    fetchUser();
  }, [numericId]);

  const handleClose = () => {
    router.back();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch(`http://localhost:8085/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const responseData = await response.json();
    setUser(responseData);

    if (response.ok) {
      // alert('User saved successfully!');
      setIsAlertOpen(true);
      // router.back();
    } else {
      alert("Failed to save the user.");
    }
  };

  return (
    <>
      <Dialog open={true} handler={handleClose} className="container">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="justify-between pb-0">
            <p className="mb-1 font-bold text-2xl">Update User</p>
            <XMarkIcon
              className="w-5 h-5 cursor-pointer text-black inline-block mr-1"
              onClick={handleClose}
            />
          </DialogHeader>
          <DialogBody className="overflow-y-scroll pt-0">
            <p className="font-normal text-gray-600 text-lg ">Update a author from the database.</p>
            <div className="flex gap-4 mt-6">PLACEHOLDER FOR AVATAR</div>
            <div className="flex items-center flex-col md:flex-row gap-4 mt-6">
              <div className="w-full">
                <Input
                  type=""
                  size="lg"
                  value={`${user?.role}`}
                  onChange={(e) => {
                    if (user) user.role = e.target.value;
                  }}
                  label="Role"
                  name="role"
                />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${user?.firstName}`}
                  onChange={(e) => {
                    if (user) user.firstName = e.target.value;
                  }}
                  label="First Name"
                  name="firstName"
                />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${user?.lastName}`}
                  onChange={(e) => {
                    if (user) user.lastName = e.target.value;
                  }}
                  label="Last Name"
                  name="lastName"
                />
              </div>
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  value={`${user?.tag}`}
                  onChange={(e) => {
                    if (user) user.tag = e.target.value;
                  }}
                  label="Tag"
                  name="tag"
                />
              </div>
              <div className="w-full">
                <Input
                  type="email"
                  size="lg"
                  value={`${user?.email}`}
                  onChange={(e) => {
                    if (user) user.email = e.target.value;
                  }}
                  label="Email"
                  name="email"
                />
              </div>
              <div className="w-full">
                <Input
                  type="password"
                  size="lg"
                  value={`${user?.password}`}
                  onChange={(e) => {
                    if (user) user.password = e.target.value;
                  }}
                  label="Password"
                  name="password"
                />
              </div>
              {/* <div className="w-full">
                <Input
                  type=""
                  size="lg"
                  value={`${user?.subscription}`}
                  onChange={(e) => {
                    if (user) user.subscription = e.target.value;
                  }}
                  label="Subscription"
                  name="subscription"
                />
              </div> */}
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

export default UpdateUser;
