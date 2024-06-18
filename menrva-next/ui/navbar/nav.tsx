"use client";

import {
  Bars3Icon,
  BellIcon,
  Collapse,
  IconButton,
  Navbar,
  XMarkIcon
} from "@/providers/coreProviders";
import ReduxProvider from "@/providers/reduxProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { default as AdvancedSearch, default as AdvancedSearchComponent } from "../search/advancedSearch";
import ThemeToggle from "../theme/themeToggle";
import ProfileMenu from "./profileMenu";

export function NavbarWithSearch({ tag, role, theme }: { tag: string, role: string, theme: string }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    // useRestoreSession();
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <Navbar shadow={false} fullWidth className="border-none bg-rose dark:bg-eggplant p-0.5 relative overflow-visible z-20">
      <div className="w-full mx-auto flex h-[4.5rem] items-center justify-between overflow-visible">
        <Link href="/home">
          <Image
            className="object-center w-[4rem] h-[4.5rem] mx-4"
            src="https://i.imgur.com/RGGXm1T.png"
            width={92}
            height={92}
            alt="logo"
            priority
          />
        </Link>
        <div className="lg:flex hidden justify-end items-center gap-8 container z-10 overflow-visible">
          <ReduxProvider>
            <div className="w-3/4 py-3 h-16 flex flex-col items-center z-10">
              <AdvancedSearchComponent theme={theme} />
            </div>
          </ReduxProvider>
          <div className="mr-12 flex items-center gap-1 z-10">
            {tag ? <IconButton variant="text" className="w-8 h-8 mt-2">
              <BellIcon className="h-5 w-5 text-eggplant dark:text-rose" />
            </IconButton> : <></>}
            {tag ? <ProfileMenu tag={tag} role={role} /> : <Link href="/login" className="underline hover:scale-105 underline-offset-2 pr-6 text-nowrap text-eggplant dark:text-parchment/70">Log In</Link>}
            <ThemeToggle theme={theme} />
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
      <Collapse open={open} className={`hidden z-10 ${open ? "overflow-visible" : "overflow-hidden" }`}>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 z-10">
          <div className="col-span-3 flex mx-auto items-center z-10">
            {tag ? <IconButton variant="text">
              <BellIcon className="h-5 w-5 text-eggplant dark:text-old-lace" />
            </IconButton> : <></>}
            {tag ? <ProfileMenu tag={tag} role={role} /> : <Link href="/login" className="underline">Log In</Link>}
            <ThemeToggle theme={theme} />
          </div>
          <div className="col-span-3 z-10 py-1 overflow-visible">
            <ReduxProvider>
              <AdvancedSearch theme={theme} />
            </ReduxProvider>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSearch;