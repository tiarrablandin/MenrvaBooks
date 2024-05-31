"use client";

import {
  Bars3Icon,
  BellIcon,
  Collapse,
  IconButton,
  Navbar,
  XMarkIcon
} from "@/providers/coreProviders";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AdvancedSearchComponent from "../search/advancedSearch";
import AdvancedSearchBar from "../search/advancedSearchBar";
import ThemeToggle from "../theme/themeToggle";
import ProfileMenu from "./profileMenu";

export function NavbarWithSearch({ tag, logout, role }: { tag: string, logout: () => void, role: string }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    // useRestoreSession();
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <Navbar shadow={false} fullWidth className="border-none bg-pink-lavender dark:bg-chinese-violet p-0.5 pr-2 relative z-10">
      <div className="w-full mx-auto flex h-[5rem] items-center ">
        <Link href="/home">
          <Image
            className="object-center w-[5rem] h-[5.5rem] mx-2"
            src="https://i.imgur.com/RGGXm1T.png"
            width={92}
            height={92}
            alt="logo"
          />
        </Link>
        <div className="lg:flex hidden justify-end items-center gap-8 container">
          <div className="w-3/4 py-3 h-16 flex flex-col items-center">
            <AdvancedSearchComponent />
          </div>
          <IconButton variant="text" className="w-8 h-8 -mr-12">
            <BellIcon className="h-5 w-5 text-eggplant" />
          </IconButton>
          <ProfileMenu tag={tag} logout={logout} role={role} />
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
        <ThemeToggle />
      </div>
      <Collapse open={open} className="hidden">
        <div className="flex flex-wrap items-center gap-2">
          <IconButton variant="text">
            <BellIcon className="h-5 w-5 text-eggplant" />
          </IconButton>
          <ProfileMenu tag={tag} logout={logout} role={role} />
          <AdvancedSearchBar />
          <ThemeToggle />
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSearch;


export function NavbarNoSearch({ tag, logout, role }: { tag: string, logout: () => void, role: string }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    // useRestoreSession();
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <Navbar shadow={false} fullWidth className="border-none bg-pink-lavender dark:bg-chinese-violet p-0.5 pr-2 relative z-10">
      <div className="w-full mx-auto flex h-[4rem] items-center ">
        <Link href="/home">
          <Image
            className="object-center w-[4rem] h-[4.5rem] mx-2"
            src="https://i.imgur.com/RGGXm1T.png"
            width={92}
            height={92}
            alt="logo"
          />
        </Link>
        <div className="lg:flex hidden justify-end items-center gap-8 container">
          <IconButton variant="text" className="w-8 h-8 -mr-12">
            <BellIcon className="h-5 w-5 text-eggplant" />
          </IconButton>
          <ProfileMenu tag={tag} logout={logout} role={role} />
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
        <ThemeToggle />
      </div>
      <Collapse open={open} className="hidden">
        <div className="flex flex-wrap items-center gap-2">
          <IconButton variant="text">
            <BellIcon className="h-5 w-5 text-eggplant" />
          </IconButton>
          <ProfileMenu tag={tag} logout={logout} role={role} />
          <AdvancedSearchBar />
          <ThemeToggle />
        </div>
      </Collapse>
    </Navbar>
  );
}