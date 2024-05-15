"use client";

import { Button, EyeIcon, EyeSlashIcon, Input } from "@/providers";
import { Typography } from "@mui/material";
import React, { useState } from "react";

const Password = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  return (
    <div className="">
      <section className="px-12 py-20 container mx-auto">
        <Typography variant="h6" className="text-eggplant">
          Change Password
        </Typography>
        <Typography className="text-gray-600 font-normal mt-1">
          Update your profile information below.
        </Typography>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-8">
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <Typography className="mb-2 font-medium text-eggplant">
                Current Password
              </Typography>
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
              <Typography className="mb-2 font-medium text-eggplant">
                New Password
              </Typography>
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
              <Typography className="mb-2 font-medium text-eggplant">
                Confirm New Password
              </Typography>
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
            <Typography variant="h6" className="text-eggplant">
              Password Requirement
            </Typography>
            <Typography className="my-2 !font-normal !text-gray-600">
              Please follow this guide for a strong password:
            </Typography>
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
