"use client";

import login from "@/lib/actions/login";
import {
  ArrowRightIcon,
  AtSymbolIcon,
  Button,
  Dialog,
  KeyIcon,
  Typography,
  XMarkIcon,
} from "@/providers/coreProviders";
import { Advent_Pro } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface LoginFormProps { }

const advent = Advent_Pro({ subsets: ["latin"] });

const LoginForm: React.FC<LoginFormProps> = ({ }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (pathname === '/login') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pathname]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;
    await login(identifier, password);
    router.push(`/userHome/@${identifier}`);
    setIsOpen(false);
  };

  const handleClose = () => {
    router.push('/home');
    setIsOpen(false);
  };

  return (
    <Dialog
      size="xs"
      open={isOpen}
      handler={handleClose}
      // handler={() => router.push('/home')}
      className={`bg-transparent shadow-none flex items-center  mx-auto ${advent.className}`}
    >
      <form onSubmit={handleSubmit} className="space-y-2 container m-0">
        <div className="flex-1 rounded-lg bg-parchment px-6 py-8 mx-auto h-full my-auto">
          <XMarkIcon
            className="w-5 h-5 cursor-pointer text-eggplant inline-block -mt-8 -ml-2 mb-2"
            onClick={handleClose}
          />
          <div className={`mb-3 text-center text-4xl text-eggplant font-medium`}>
            Log in to continue
          </div>
          <div className="w-full text-deep-sea mt-7">
            <div>
              <label className="mb-2 mt-5 block text-xl font-medium" htmlFor="identifier">
                Username
              </label>
              <div className="relative">
                <input
                  className="peer block w-full bg-parchment/70 rounded-md border border-eggplant py-[9px] pl-10 text-md font-medium outline-2 placeholder:text-gray-500"
                  id="identifier"
                  type="text"
                  name="identifier"
                  placeholder="Enter your tag or email"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-eggplant peer-focus:text-eggplant" />
              </div>
            </div>
            <div className="mt-8">
              <label className="mb-2 mt-5 block text-xl font-medium" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-eggplant bg-parchment/70 py-[9px] pl-10 text-md font-medium outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-eggplant peer-focus:text-eggplant" />
              </div>
              <div className="mr-auto w-min text-nowrap p-1">
                <Link href="/">
                  <Typography className="ml-2 underline underline-offset-1 hover:scale-105">
                    Forgot your password?
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
          <LoginButton isLoading={isLoading} />
          {/* <div className="flex h-3 items-end space-x-1">
                        <div
                            className="flex h-5 items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {error && (
                                <>
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                    <div className="text-sm text-red-500">{error}</div>
                                </>
                            )}
                        </div>
                    </div> */}

          <div className="mx-auto w-full flex flex-nowrap justify-center py-2">
            <Typography>New to Menrva?</Typography>
            <Link href="/subscriptions">
              <Typography className="ml-2 underline underline-offset-1 hover:scale-105">
                Create a free account!
              </Typography>
            </Link>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

const LoginButton: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <Button
      type="submit"
      className="mt-8 w-full flex flex-row justify-center items-center shadow-md bg-eggplant"
      aria-disabled={isLoading}
      disabled={isLoading}
    >
      <p className="mt-1 font-normal text-lg">{isLoading ? "Logging in..." : "Log In"}</p>
      <ArrowRightIcon className="ml-auto h-6 w-6 text-parchment/70" />
    </Button>
  );
};

export default LoginForm;
