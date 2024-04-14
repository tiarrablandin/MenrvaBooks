"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  Squares2X2Icon,
  BellIcon,
  HomeIcon,
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
  ArrowRightEndOnRectangleIcon,
} from "@/providers";
import AdvancedSearchBar from "../search/advancedSearchBar";
import LoginForm from "./login";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../lib/store/userSlice";
import ThemeToggle from "../theme/themeToggle";

// profile menu component
const profileMenuItems = [
  {
    label: "Home",
    icon: HomeIcon,
    route: "/userHome",
  },
  {
    label: "My Profile",
    icon: UserCircleIcon,
    route: "/userAccount",
  },
  {
    label: "Logout",
    icon: ArrowLeftStartOnRectangleIcon,
    route: "/logout",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const iconClass = "flex items-center gap-x-3 p-2 px-4 font-normal text-base";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar variant="circular" size="sm" alt="tania andrew" src="/image/avatar1.jpg" />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 bg-pink-lavender dark:bg-chinese-violet">
        <MenuItem key="" onClick={closeMenu} className="">
          <Typography
            as="li"
            variant="small"
            className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
          >
            <HomeIcon className="h-4 w-4" />
            <Link href="/home" className="flex items-center">
              Home
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem key="" onClick={closeMenu} className="">
          <Typography
            as="li"
            variant="small"
            className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
          >
            {currentUser ? (
              <>
                <UserIcon className="h-4 w-4" />
                <Link href="/account" className="flex items-center">
                  My Profile
                </Link>
              </>
            ) : (
              <>
                <UserIcon className="h-4 w-4" />
                <Link href="/subscriptions" className="flex items-center">
                  Register
                </Link>
              </>
            )}
          </Typography>
        </MenuItem>
        <MenuItem key="" onClick={closeMenu} className="">
          <Typography
            as="li"
            variant="small"
            className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
          >
            {currentUser ? (
              <>
                <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
                <Link href="/logout" className="flex items-center">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <ArrowRightEndOnRectangleIcon className="h-4 w-4" />
                <LoginForm />
              </>
            )}
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function NavbarWithSearch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  return (
    <Navbar shadow={false} fullWidth className="border-none bg-pink-lavender dark:bg-chinese-violet">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/home">
          <Image
            className="object-center w-[4rem] h-[4rem]"
            src="https://i.imgur.com/RGGXm1T.png"
            width={340}
            height={680}
            alt=""
          />
        </Link>
        <div className="lg:flex hidden items-center gap-2">
          <AdvancedSearchBar />
          <IconButton variant="text">
            <BellIcon className="h-5 w-5 text-eggplant" />
          </IconButton>
          <ProfileMenu />
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
      <ThemeToggle />
      <Collapse open={open}>
        <div className="flex flex-wrap items-center gap-2">
          <IconButton variant="text">
            <BellIcon className="h-5 w-5 text-eggplant" />
          </IconButton>
          <ProfileMenu />
          <div className="flex flex-col gap-4 mt-4"></div>
          <AdvancedSearchBar />
          <ThemeToggle />
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSearch;
