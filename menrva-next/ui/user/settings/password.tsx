"use client";

import { User } from "@/lib/models/user";
import { Button, EyeIcon, EyeSlashIcon, Input } from "@/providers/coreProviders";
import { useState } from "react";

const Password: React.FC<{ user: User }> = ({ user }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const cn = "w-full placeholder:opacity-100 !border-eggplant dark:!border-parchment/70 text-deep-sea dark:text-parchment/70";

  return (
    <div className="text-deep-sea dark:text-parchment/70">
      <section className="px-8 pl-16 py-12 container mx-auto">
        <p className="font-semibold">
          Change Password
        </p>
        <p className="font-normal mt-1">
          Update your profile information below.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-8">
          <form className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <p className="mb-2 font-medium">
                Current Password
              </p>
              <div>
                <Input
                  placeholder="Current Password"
                  labelProps={{
                    className: "hidden",
                  }}
                  className={`${cn}`}
                  name="oldPassword"
                  type={passwordShown ? "text" : "password"}
                  icon={
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </i>
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <p className="mb-2 font-medium">
                New Password
              </p>
              <Input
                placeholder="New Password"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
                name="newPassword"
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-medium">
                Confirm New Password
              </p>
              <Input
                placeholder="Confirm New Password"
                labelProps={{
                  className: "hidden",
                }}
                className={`${cn}`}
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
            </div>
            <Button className="max-w-fit bg-eggplant dark:bg-rose/70 text-parchment/70">Update Password</Button>
          </form>
          <div className="w-full">
            <p className="">
              Password Requirement
            </p>
            <p className="my-2 !font-normal">
              Please follow this guide for a strong password:
            </p>
            <div className="flex flex-col justify-between lg:items-end md:items-end gap-8 md:flex-row">
              <div className="grid gap-0.5">
                <ul className="list-disc ml-6">
                  <li className="!text-sm !font-normal">
                    One special characters ( ! @ # $ % ^ & * ( ) - _ = + )
                  </li>
                  <li className="!text-sm !font-normal">Min 6 characters</li>
                  <li className="!text-sm !font-normal">
                    One number (2 are recommended)
                  </li>
                  <li className="!text-sm !font-normal">Change it often</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Password;
