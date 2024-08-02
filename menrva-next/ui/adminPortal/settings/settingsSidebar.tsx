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
import Link from "next/link";

const SettingsSidebar = () => {
  return (
    <Card className="h-screen fixed w-52 shadow-rose/20 rounded-none bg-parchment/70 dark:bg-deep-sea/70 shadow flex">
      <div className="mb-2 p-4">
        <p className="text-xl px-2 text-rose/90">
          Settings
        </p>
      </div>
      <List className={`text-eggplant dark:text-rose/90 min-w-full`}>
        <Link href="#profile" passHref className="">
          <ListItem className="hover:bg-eggplant/20 dark:hover:text-parchment/70 dark:hover:bg-rose/20 cursor-pointer dark:focus:bg-rose/20 dark:focus:text-parchment/70">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <p>Profile</p>
          </ListItem>
        </Link>
        <Link href="#password" passHref>
          <ListItem className="hover:bg-eggplant/20 dark:hover:text-parchment/70 dark:hover:bg-rose/20 cursor-pointer dark:focus:bg-rose/20 dark:focus:text-parchment/70">
            <ListItemPrefix>
              <KeyIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <p>Password</p>
          </ListItem>
        </Link>
        <Link href="#notifications" passHref>
          <ListItem className="hover:bg-eggplant/20 dark:hover:text-parchment/70 dark:hover:bg-rose/20 cursor-pointer dark:focus:bg-rose/20 dark:focus:text-parchment/70">
            <ListItemPrefix>
              <BellIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <p>Notifications</p>
          </ListItem>
        </Link>
        <Link href="#security" passHref>
          <ListItem className="hover:bg-eggplant/20 dark:hover:text-parchment/70 dark:hover:bg-rose/20 cursor-pointer dark:focus:bg-rose/20 dark:focus:text-parchment/70">
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
