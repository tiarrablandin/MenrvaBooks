'use client';

import {
  BellIconOutline,
  Card,
  KeyIconOutline,
  List,
  ListItem,
  ListItemPrefix,
  ShieldCheckIconOutline,
  UserCircleIcon
} from "@/providers/coreProviders";
import { Advent_Pro } from "next/font/google";
import Link from "next/link";

const SettingsSidebar = () => {
  return (
    <Card className="h-screen fixed w-52 shadow-blue-gray-900/5 rounded-none bg-pink-lavender/65">
      <div className="mb-2 p-4">
        <p className="text-xl px-2">
          Settings
        </p>
      </div>
      <List className={`text-eggplant min-w-full`}>
        <Link href="#profile" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <p>Profile</p>
          </ListItem>
        </Link>
        <Link href="#password" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <KeyIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <p>Password</p>
          </ListItem>
        </Link>
        <Link href="#notifications" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <BellIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <p>Notifications</p>
          </ListItem>
        </Link>
        <Link href="#security" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <ShieldCheckIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <p>Security</p>
          </ListItem>
        </Link>
      </List>
    </Card >
  );
};

export default SettingsSidebar;
