"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
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
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../lib/store/userSlice";
import ThemeToggle from "../theme/themeToggle";
import LoginForm from "./login";
import RegisterForm from "../subscriptions/register";

export function CustomNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const iconClass = "flex items-center gap-x-3 p-2 px-4 font-normal text-base";

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className={`mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6`}>
      <Typography
        as="li"
        variant="small"
        className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer text-xl`}
      >
        <HomeIcon className="h-5 w-5" />
        <Link href="/home" className="flex items-center mt-1">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer text-xl`}
      >
        {currentUser ? (
          <>
            <UserIcon className="h-6 w-6" />
            <Link href="/account" className="flex items-center">
              Account
            </Link>
          </>
        ) : (
          <>
            <UserIcon className="h-5 w-5" />
            <Link href="/subscriptions" className="flex items-center">
              Register
            </Link>
          </>
        )}
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer text-xl`}
      >
        {currentUser ? (
          <>
            <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
            <Link href="/logout" className="flex items-center">
              Logout
            </Link>
          </>
        ) : (
          <>
            <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
            <LoginForm />
          </>
        )}
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="min-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-3 bg-pink-lavender dark:bg-chinese-violet">
        <div className="container mx-auto flex flex-wrap items-center justify-between ">
          <Typography className={`mr-4 cursor-pointer py-1.5 font-medium`} variant="h3">
            <Link href="/home" className="flex items-center">
              Menrva Books
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          {/* <SearchBar /> */}
          <ThemeToggle />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit text-eggplant dark:text-old-lace hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 ml-auto lg:hidden" />
            ) : (
              <Bars3Icon className="h-6 w-6 ml-auto lg:hidden" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
              <div className="relative w-full gap-2 md:w-max"></div>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
