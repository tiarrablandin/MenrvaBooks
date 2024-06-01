"use client";

import { Button, EyeIcon, EyeSlashIcon, Input } from "@/providers/coreProviders";
import { Typography } from "@mui/material";
import React, { useState } from "react";

const Password = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <div className="">
      <section className="px-12 py-20 container mx-auto">
        <p className="text-eggplant">
          Change Password
        </p>
        <p className="text-gray-600 font-normal mt-1">
          Update your profile information below.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-8">
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <p className="mb-2 font-medium text-eggplant">
                Current Password
              </p>
              <div>
                <Input
                  placeholder="Current Password"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-eggplant"
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
              <p className="mb-2 font-medium text-eggplant">
                New Password
              </p>
              <Input
                placeholder="New Password"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-eggplant"
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
              <p className="mb-2 font-medium text-eggplant">
                Confirm New Password
              </p>
              <Input
                placeholder="Confirm New Password"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-eggplant"
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
            <Button className="max-w-fit bg-eggplant text-old-lace">Update Password</Button>
          </div>
          <div className="w-full">
            <p className="text-eggplant">
              Password Requirement
            </p>
            <p className="my-2 !font-normal !text-gray-600">
              Please follow this guide for a strong password:
            </p>
            <div className="flex flex-col justify-between lg:items-end md:items-end gap-8 md:flex-row">
              <div className="grid gap-0.5">
                <ul className="list-disc ml-6">
                  <li className="!text-sm !font-normal !text-gray-600">
                    One special characters ( ! @ # $ % ^ & * ( ) - _ = + )
                  </li>
                  <li className="!text-sm !font-normal !text-gray-600">Min 6 characters</li>
                  <li className="!text-sm !font-normal !text-gray-600">
                    One number (2 are recommended)
                  </li>
                  <li className="!text-sm !font-normal !text-gray-600">Change it often</li>
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
