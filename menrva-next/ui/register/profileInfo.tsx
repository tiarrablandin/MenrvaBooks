"use client";

import register from "@/lib/actions/register";
import { ArrowUpTrayIcon, Button, Input } from "@/providers/coreProviders";
import Link from "next/link";
import router from "next/router";
import { useState } from "react";

const ProfileInfo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const tag = formData.get("tag") as string;
    const password = formData.get("password") as string;

    router.push(`/userHome/@${tag}`);

    await register(email, firstName, lastName, tag, password);
  };

  const cn =
    "w-full placeholder:opacity-100 !border-eggplant dark:!border-parchment/70 text-deep-sea dark:text-parchment/70";

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
      <form onSubmit={handleSubmit} className="">
        <section className="px-8 pl-16 py-8 pb-12 container mx-auto">
          <p className="font-semibold">Basic Information</p>
          <p className="font-normal mt-1">Update your profile information below.</p>
          <div className="flex flex-col mt-8">
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <p className="mb-2 font-medium">First Name</p>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  size="lg"
                  placeholder="Emma"
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                  required
                />
              </div>
              <div className="w-full">
                <p className="mb-2 font-medium">Last Name</p>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  size="lg"
                  placeholder="Roberts"
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                  required
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <p className="mb-2 font-medium">Email</p>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  size="lg"
                  placeholder="emma@mail.com"
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                  required
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <p className="mb-2 font-medium">Tag</p>
                <Input
                  id="tag"
                  type="text"
                  name="tag"
                  size="lg"
                  placeholder="@"
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                  required
                />
              </div>
              <div className="w-full">
                <p className="mb-2 font-medium">Date of Birth</p>
                <Input
                  size="lg"
                  placeholder="01/01/2024"
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
              <div className="w-full">
                <p className="mb-2 font-medium">Password</p>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  size="lg"
                  placeholder=""
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                  required
                />
              </div>
              <div className="w-full">
                <p className="mb-2 font-medium">Confirm password</p>
                <Input
                  id="confirm"
                  type="password"
                  name="confirm"
                  size="lg"
                  placeholder=""
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                />
              </div>
              <Link href="https://square.link/u/12DC4ZOw">
                <Button>Pay Here</Button>
              </Link>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ProfileInfo;
