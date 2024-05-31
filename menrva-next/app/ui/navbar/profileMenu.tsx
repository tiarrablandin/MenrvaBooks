"use client";

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
  Typography,
  UserIcon
} from "@/providers/coreProviders";
import Link from "next/link";
import React from "react";

const ProfileMenu: React.FC<{ tag: string; role: string; logout: () => void }> = ({
  tag,
  role,
  logout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const iconClass = "flex items-center gap-x-3 p-2 px-4 font-normal text-base";

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  // useEffect(()=>{
  //   console.log(user)
  // },[user])

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <div className="w-24 mx-2">
          {/* <div className="flex items-center w-full cursor-pointer">
            <Image
              width={120}
              height={120}
              src="/avatars/avatar7.webp"
              alt="user avatar"
              className="bg-transparent w-24 h-24"
            />
            <div>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-4 w-4 -mx-6 text-onyx transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </div>
          </div> */}
          <Button
            variant="text"
            className="flex items-center justify-center w-20 h-12 translate-x-4 gap-1 rounded-full"
          >
            {/* <div className="-translate-x-12"> */}
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
                className={`inline-block h-3 w-3 text-eggplant  transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </div>
            {/* </div> */}
          </Button>

        </div>
      </MenuHandler>
      <MenuList className="p-1 bg-pink-lavender dark:bg-chinese-violet">
        <MenuItem key="1" onClick={closeMenu} className="">
          <Typography
            as="li"
            variant="small"
            className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
          >
            <HomeIcon className="h-4 w-4" />
            <Link href={tag ? `/userHome/${tag}` : "/home"} className="flex items-center">
              Home
            </Link>
          </Typography>
        </MenuItem>
        {!tag ? (
          <MenuItem key="2" onClick={closeMenu} className="">
            <Typography
              as="li"
              variant="small"
              className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
            >
              <>
                <UserIcon className="h-4 w-4" />
                <Link href="/subscriptions" className="flex items-center">
                  Register
                </Link>
              </>
            </Typography>
          </MenuItem>
        ) : (
          <></>
        )}
        {tag && role === "Admin" && (
          <MenuItem key="3" onClick={closeMenu} className="">
            <Link href="/admin" className="flex items-center">
              <Typography
                as="li"
                variant="small"
                className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
              >
                <TableCellsIcon className="h-4 w-4" />
                Admin
              </Typography>
            </Link>
          </MenuItem>
        )}
        <MenuItem key="4" onClick={closeMenu} className="">
          {tag ? (
            <Link onClick={handleLogout} href="/home" className="flex items-center">
              <Typography
                as="li"
                variant="small"
                className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
              >
                <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
                Logout
              </Typography>
            </Link>
          ) : (
            <Link href="/login" className="flex items-center">
              <Typography
                as="li"
                variant="small"
                className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
              >
                <ArrowRightEndOnRectangleIcon className="h-4 w-4" />
                Login
              </Typography>
            </Link>
          )}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
