"use client";

import {
  Bars3Icon,
  BellIcon,
  Collapse,
  IconButton,
  Navbar,
  XMarkIcon,
} from "@/providers/coreProviders";
import ReduxProvider from "@/providers/reduxProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  default as AdvancedSearch,
  default as AdvancedSearchComponent,
} from "../search/advancedSearch";
import ThemeToggle from "../theme/themeToggle";
import ProfileMenu from "./profileMenu";

export function NavbarWithSearch({ tag, role, theme, }: { tag: string; role: string; theme: string; }) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    // useRestoreSession();
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const isOpen = hovered || open || focused;

  return (
    <Navbar
      shadow={false}
      fullWidth
      className={`transition-all duration-500 ease-in-out ${isOpen ? "bg-rose dark:bg-eggplant" : "bg-parchment dark:bg-onyx"} border-none p-0.5 relative overflow-visible z-20`}
    >
      <div
        className="w-full mx-auto flex h-[4.5rem] items-center justify-between overflow-visible transition-all duration-300 ease-in-out object-center "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link
          href="/home"
        >
          <Image
            className={`w-[5rem] h-[5.5rem] mx-4 transition-transform duration-300 ease-in-out ${isOpen ? "scale-100" : "scale-90"}`}
            src="/image2vector-3.svg"
            width="65"
            height="60"
            alt="logo"
          />
        </Link>
        {/* <div className={`${hovered || open ? 'flex' : 'hidden'} justify-end items-center gap-8 container z-10 overflow-visible`}> */}
        <div
          className={`transition-opacity duration-500 ${isOpen ? 'flex opacity-100' : 'hidden opacity-0'} justify-end items-center gap-8 container z-10 overflow-visible`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <ReduxProvider>
            <div className="w-3/4 py-3 h-16 flex flex-col items-center z-10">
              <AdvancedSearchComponent />
            </div>
          </ReduxProvider>
          <div className="mr-12 flex items-center gap-1 z-10">
            {/* {tag ? <IconButton variant="text" className="w-8 h-8 mt-2">
              <BellIcon className="h-5 w-5 text-eggplant dark:text-rose" />
            </IconButton> : <></>} */}
            {tag ? (
              <ProfileMenu tag={tag} role={role} />
            ) : (
              <Link
                href="/login"
                className="underline hover:scale-105 underline-offset-2 pr-6 text-nowrap text-eggplant dark:text-parchment/70"
              >
                Log In
              </Link>
            )}
            <ThemeToggle />
          </div>
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden mr-4"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {/* below is mobile only */}
      <Collapse
        open={open}
        className={`hidden z-10 ${open ? "overflow-visible" : "overflow-hidden"}`}
      >
        <div className="grid grid-cols-3 grid-rows-2 gap-2 z-10">
          <div className="col-span-3 flex mx-auto items-center z-10">
            {tag ? (
              <IconButton variant="text">
                <BellIcon className="h-5 w-5 text-eggplant dark:text-old-lace" />
              </IconButton>
            ) : (
              <></>
            )}
            {tag ? (
              <ProfileMenu tag={tag} role={role} />
            ) : (
              <Link href="/login" className="underline">
                Log In
              </Link>
            )}
            <ThemeToggle />
          </div>
          <div className="col-span-3 z-10 py-1 overflow-visible">
            <ReduxProvider>
              <AdvancedSearch />
            </ReduxProvider>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSearch;
