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
    <Navbar shadow={false} fullWidth className="border-none bg-pink-lavender dark:bg-chinese-violet p-0.5 pr-2 relative z-10">
      <div className="w-full mx-auto flex h-[4.5rem] items-center justify-between">
        <Link href="/home">
          <Image
            className="object-center w-[4rem] h-[4.5rem] mx-6"
            src="https://i.imgur.com/RGGXm1T.png"
            width={92}
            height={92}
            alt="logo"
            priority
          />
        </Link>
        <div className="lg:flex hidden justify-end items-center gap-8 container">
          <ReduxProvider>
            <div className="w-3/4 py-3 h-16 flex flex-col items-center">
              <AdvancedSearchComponent theme={theme} />
            </div>
          </ReduxProvider>
          <div className="mr-12 flex items-center gap-1">
            <IconButton variant="text" className="w-8 h-8 mt-2">
              <BellIcon className="h-5 w-5 text-eggplant dark:text-old-lace" />
            </IconButton>
            <ProfileMenu tag={tag} role={role} />
            <ThemeToggle theme={theme} />
          </div>
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open} className="hidden">
        <div className="flex flex-wrap items-center gap-2">
          <IconButton variant="text">
            <BellIcon className="h-5 w-5 text-eggplant dark:text-old-lace" />
          </IconButton>
          <ProfileMenu tag={tag} role={role} />
          <ReduxProvider>
            <AdvancedSearch theme={theme} />
          </ReduxProvider>
          <ThemeToggle theme={theme} />
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSearch;