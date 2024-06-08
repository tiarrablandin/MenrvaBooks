"use client";

import logout from "@/lib/actions/logout";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Avatar,
  Button,
  ChevronDownIcon,
  HomeIcon,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  TableCellsIcon,
  UserIcon
} from "@/providers/coreProviders";
import { Advent_Pro } from "next/font/google";
import Link from "next/link";
import React from "react";

const advent = Advent_Pro({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

const ProfileMenu: React.FC<{ tag: string; role: string; }> = ({ tag, role }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const iconClass = "flex items-center gap-x-3 p-2 px-6 font-normal text-base text-lg";

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <div className="w-24 mx-2">
          <Button
            variant="text"
            className="flex items-center justify-center w-20 h-12 translate-x-4 gap-1 rounded-full"
          >
            <Avatar
              className="min-w-24 min-h-24 p-0 bg-transparent pointer-events-none"
              variant="circular"
              size="sm"
              alt="tania andrew"
              src="/avatars/avatar7.webp"
              width={180}
              height={180}
            />
            <div className="-translate-x-7">
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`inline-block h-3 w-3 text-eggplant dark:text-parchment transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </div>
          </Button>

        </div>
      </MenuHandler>
      <MenuList className={`p-1 bg-rose/90 text-eggplant dark:bg-eggplant dark:text-parchment/70 ${advent.className}`}>
        <MenuItem key="1" onClick={closeMenu} className="">
          <div
            className={`${iconClass} transition-transform hover:scale-105 w-full cursor-pointer`}
          >
            <HomeIcon className="h-4 w-4" />
            <Link href={tag ? `/userHome/${tag}` : "/home"} className="flex items-center">
              Home
            </Link>
          </div>
        </MenuItem>
        {!tag ? (
          <MenuItem key="2" onClick={closeMenu} className="">
            <div
              className={`${iconClass} transition-transform hover:scale-105 w-full cursor-pointer`}
            >
              <>
                <UserIcon className="h-4 w-4" />
                <Link href="/subscriptions" className="flex items-center">
                  Register
                </Link>
              </>
            </div>
          </MenuItem>
        ) : (
          <></>
        )}
        {tag && role === "Admin" && (
          <MenuItem key="3" onClick={closeMenu} className="">
            <Link href="/admin" className="flex items-center">
              <div
                className={`${iconClass} transition-transform hover:scale-105 w-full cursor-pointer`}
              >
                <TableCellsIcon className="h-4 w-4" />
                Admin
              </div>
            </Link>
          </MenuItem>
        )}
        <MenuItem key="4" onClick={closeMenu} className="">
          {tag ? (
            <Link onClick={handleLogout} href="/home" className="flex items-center">
              <div
                className={`${iconClass} transition-transform hover:scale-105 w-full cursor-pointer`}
              >
                <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
                Logout
              </div>
            </Link>
          ) : (
            <Link href="/login" className="flex items-center">
              <div
                className={`${iconClass} transition-transform hover:scale-105 w-full cursor-pointer`}
              >
                <ArrowRightEndOnRectangleIcon className="h-4 w-4" />
                Login
              </div>
            </Link>
          )}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
