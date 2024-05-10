'use client';

import {
  BellIconOutline,
  Card,
  KeyIconOutline,
  List,
  ListItem,
  ListItemPrefix,
  ShieldCheckIconOutline,
  Typography,
  UserCircleIcon
} from "@/providers";
import Link from "next/link";

const SettingsSidebar = () => {
  return (
    <Card className="h-screen fixed w-52 shadow-blue-gray-900/5 rounded-none bg-pink-lavender/65">
      <div className="mb-2 p-4">
        <Typography variant="h5" className="text-xl px-2">
          Settings
        </Typography>
      </div>
      <List className="text-eggplant min-w-full">
        <Link href="#profile" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography variant="h6">Profile</Typography>
          </ListItem>
        </Link>
        <Link href="#password" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <KeyIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Typography variant="h6">Password</Typography>
          </ListItem>
        </Link>
        <Link href="#notifications" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <BellIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Typography variant="h6">Notifications</Typography>
          </ListItem>
        </Link>
        <Link href="#security" passHref>
          <ListItem className="hover:bg-pink-lavender/40 flex items-center cursor-pointer">
            <ListItemPrefix>
              <ShieldCheckIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Typography variant="h6">Security</Typography>
          </ListItem>
        </Link>
      </List>
    </Card >
  );
};

export default SettingsSidebar;
