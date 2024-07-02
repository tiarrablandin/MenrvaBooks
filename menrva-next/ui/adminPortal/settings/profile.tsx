"use client";

import { SimpleUpdateUserRequest, UpdateUserRequest, User } from "@/lib/models/user";
import { fetchUpdateUser } from "@/lib/services/apiService";
import { RootState, useAppDispatch } from "@/lib/store/store";
import { ArrowUpTrayIcon, Button, Input, url } from "@/providers/coreProviders";
import { useSelector } from "react-redux";

const Profile: React.FC<{ user: User }> = ({ user }) => {
  const token = useSelector((state: RootState) => state.user.jwt) as string;
  const cn =
    "w-full placeholder:opacity-100 !border-eggplant dark:!border-parchment/70 text-deep-sea dark:text-parchment/70";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData: SimpleUpdateUserRequest = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      tag: formData.get("tag") as string,
      email: formData.get("email") as string,
      role: user.role,
    };

    const updatedUser = await fetchUpdateUser(user.id, userData, token);
    console.log(updatedUser);
  };

  return (
    <div className="text-deep-sea dark:text-parchment/70">
      {/* Avatar Upload */}
      <section className="py-12 pl-16 px-4 container mx-auto">
        <div className="flex justify-between items-start">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://www.material-tailwind.com/img/avatar1.jpg"
                alt="dark"
                className="w-14 rounded-full"
              />
              <div>
                <p className="!font-semibold mb-1">Select and Upload image</p>
                <p className="!font-medium">.svg, .png, .jpg (size 400x400px).</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button className="flex gap-2 bg-eggplant dark:bg-rose/70 text-parchment/70">
                <ArrowUpTrayIcon strokeWidth={2} className="h-4 w-4 text-parchment/70" />
                select avatar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Form */}
      <section className="px-8 pl-16 py-8 pb-12 container mx-auto">
        <p className="font-semibold">Basic Information</p>
        <p className="font-normal mt-1">Update your profile information below.</p>
        <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <p className="mb-2 font-medium">First Name</p>
              <Input
                size="lg"
                placeholder={user.firstName}
                name="firstName"
                id="firstName"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-medium">Last Name</p>
              <Input
                size="lg"
                placeholder={user.lastName}
                name="lastName"
                id="lastName"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
            <div className="w-full">
              <p className="mb-2 font-medium">Tag</p>
              <Input
                size="lg"
                placeholder={user.tag}
                name="tag"
                id="tag"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-medium">Email</p>
              <Input
                size="lg"
                placeholder={user.email}
                name="email"
                id="email"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
              />
            </div>
          </div>
          <div className="w-1/2">
            <p className="mb-2 font-medium">Role</p>
            <Input
              size="lg"
              value={user.role}
              name="role"
              id="role"
              disabled={user.role !== "Master"}
              labelProps={{
                className: "hidden",
              }}
              className={`${cn} disabled:bg-parchment/70 dark:disabled:bg-onyx/50 !border !border-eggplant dark:!border-parchment/70`}
            />
          </div>
          <Button type="submit" className="mt-6 max-w-fit bg-eggplant dark:bg-rose/70 text-parchment/70">
            Save Updates
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Profile;
