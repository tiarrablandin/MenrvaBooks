"use client";

import register from "@/lib/actions/register";
import {
  ArrowRightIcon,
  AtSymbolIcon,
  Button,
  Dialog,
  EnvelopeIcon,
  KeyIcon,
  UserCircleIcon,
  XMarkIcon
} from "@/providers/coreProviders";
import { Advent_Pro } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const advent = Advent_Pro({ subsets: ["latin"] });

interface RegisterFormProps { }

const RegisterForm: React.FC<RegisterFormProps> = ({ }) => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const tag = formData.get('tag') as string;
    const password = formData.get('password') as string;
    
    console.log({ email, firstName, lastName, tag, password });  // Log the data to check
    router.push(`/userHome/@${tag}`);
    
    await register(email, firstName, lastName, tag, password);
    // setIsOpen(false);
  }
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Dialog
      size="sm"
      open={true}
      handler={() => router.back()}
      className={`bg-transparent shadow-none w-full ${advent.className} text-lg`}
    >
      <form onSubmit={handleSubmit} className="space-y-3 my-auto text-xl font-medium">
        <div className="flex flex-col items-center justify-center h-3/4 rounded-lg bg-pink-lavender/70 px-6 py-8 m-auto">
          <div className="flex mx-auto">
            <h1 className={` text-center text-3xl font-semibold text-eggplant`}>Register for an account.</h1>
            <XMarkIcon
              className="w-5 h-5 cursor-pointer inline-block absolute top-5 right-5 text-eggplant"
              onClick={() => router.back()}
            />
          </div>
          <div className="w-full my-auto">
            <div>
              <label
                className="my-3 block font-medium text-eggplant"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                />
                <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div>
              <label
                className="mb-3 mt-2 block font-medium text-eggplant"
                htmlFor="firstName"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div>
              <label
                className="mb-3 mt-2 block font-medium text-eggplant"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div>
              <label className="mb-3 mt-2 block font-medium text-eggplant" htmlFor="tag">
                Tag
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                  id="tag"
                  type="text"
                  name="tag"
                  placeholder="tag"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <label
              className="mb-3 mt-2 block font-medium text-eggplant"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <label
              className="mb-3 mt-2 block font-medium text-eggplant"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
                id="confirm"
                type="password"
                name="confirm"
                placeholder="confirm password"
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <RegisterButton isLoading={isLoading} />
          {/* <div className="flex h-3 items-end space-x-1">
              <div className="flex h-5 items-end space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <div className="text-red-500">{errorMessage}</div>
                  </>
                )}
              </div>
            </div> */}
        </div>
      </form>
    </Dialog>
  );
};

const RegisterButton: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <Button
      type="submit"
      className="mt-8 w-full flex flex-row justify-center items-center shadow-md bg-eggplant"
      aria-disabled={isLoading}
      disabled={isLoading}
    >
      <div className="mt-1 font-normal text-old-lace">
        {isLoading ? "Registering..." : "Sign Up"}
      </div>
      <ArrowRightIcon className="ml-auto h-6 w-6 text-old-lace" />
    </Button>
  );
}

export default RegisterForm;
