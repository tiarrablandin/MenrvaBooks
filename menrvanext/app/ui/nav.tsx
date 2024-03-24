"use client";

import {
  ArrowRightEndOnRectangleIcon,
  Button,
  Collapse,
  HomeIcon,
  IconButton,
  Input,
  MagnifyingGlassIcon,
  Navbar,
  Typography,
  UserIcon,
  XMarkIcon,
} from "@/providers";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import LoginForm from "./userPortal/login";

const inter = Inter({ subsets: ["latin"] });

export function CustomNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const iconClass = "flex items-center gap-x-2 p-1 text-[#673C4F]";

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLoginClick = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const navList = (
    <ul
      className={`${inter.className} mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6`}
    >
      <Typography as="li" variant="small" className={`${iconClass}`}>
        <HomeIcon className="h-5 w-4 text-[#673C4F]" />
        <Link href="/home" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small" className={`${iconClass}`}>
        <UserIcon className="h-5 w-4 text-[#673C4F]" />
        <Link href="#" className="flex items-center">
          Account
        </Link>
      </Typography>
      <Typography as="li" variant="small" className={`${iconClass}`}>
        <ArrowRightEndOnRectangleIcon className="h-5 w-4 text-[#673C4F]" />
        <Link href="#" className="flex items-center" onClick={handleLoginClick}>
          Login
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky min-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-3 bg-[#e1bee7] shadow-md shadow-purple-100">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-[#673c4f]">
          <Typography
            className={`mr-4 cursor-pointer py-1.5 font-medium ${inter.className}`}
            variant="h3"
          >
            <Link href="/home" className="flex items-center">
              Menrva Books
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className="hidden items-center gap-x-2 lg:flex">
            <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-[#673c4f] scale-[92%] pl-9 placeholder:text-[#673c4f] focus:!border-[#673c4f/80]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin={undefined}
              />
              <div className="!absolute left-5 top-[10px]">
                <MagnifyingGlassIcon className="h-5 w-4 text-[#673C4F]" />
              </div>
            </div>
            {/* <Button size="sm" className="rounded-lg scale-y-110 bg-[#673C4F]">
            Search
          </Button> */}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
              <div className="relative w-full gap-2 md:w-max">
                <Input
                  type="search"
                  placeholder="Search"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                  className=" !border-[#673c4f] scale-[92%] pl-9 placeholder:text-[#673c4f] focus:!border-[#673c4f/80]"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
                <div className="!absolute left-6 top-[10px]">
                  <MagnifyingGlassIcon className="h-5 w-4 text-[#673C4F]" />
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </Navbar>
      {isLoginModalOpen && (
        <div className="modal fixed z-10 left-0 top-0 flex items-center w-full h-full overflow-auto bg-black/40">
          <div className="modal-content m-auto p-5 h-[55%] w-4/5 flex flex-col">
            <LoginForm  closeForm={handleLoginClick} />
          </div>
        </div>
      )}
    </>
  );
}

export default CustomNavbar;
