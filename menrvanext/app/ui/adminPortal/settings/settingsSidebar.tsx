import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  UserCircleIcon,
  KeyIconOutline,
  ShieldCheckIconOutline,
  CreditCardIconOutline,
  BellIconOutline,
} from "@/providers";
import Link from "next/link";

const SettingsSidebar = () => {
  return (
    <Card className="h-screen w-52 shadow-blue-gray-900/5 rounded-none bg-pink-lavender/65">
      <div className="mb-2 p-4">
        <Typography variant="h5" className="text-xl px-2">
          Settings
        </Typography>
      </div>
      <List className="text-eggplant min-w-full">
        <ListItem className="hover:bg-pink-lavender/40">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href="./settings/profile">
            <Typography variant="h6">Profile</Typography>
          </Link>
        </ListItem>
        <ListItem className="hover:bg-pink-lavender/40">
          <ListItemPrefix>
            <KeyIconOutline className="h-5 w-5" />
          </ListItemPrefix>
          <Link href="./settings/password">
            <Typography variant="h6">Password</Typography>
          </Link>
        </ListItem>
        <ListItem className="hover:bg-pink-lavender/40">
          <ListItemPrefix>
            <BellIconOutline className="h-5 w-5" />
          </ListItemPrefix>
          <Link href="./settings/notifications">
            <Typography variant="h6">Notifications</Typography>
          </Link>
        </ListItem>
        <ListItem className="hover:bg-pink-lavender/40">
          <ListItemPrefix>
            <ShieldCheckIconOutline className="h-5 w-5" />
          </ListItemPrefix>
          <Link href="./settings/security">
            <Typography variant="h6">Security</Typography>
          </Link>
        </ListItem>
        <ListItem className="hover:bg-pink-lavender/40">
          <ListItemPrefix>
            <CreditCardIconOutline className="h-5 w-5" />
          </ListItemPrefix>
          <Link href="./settings/payments">
            <Typography variant="h6">Payments</Typography>
          </Link>
        </ListItem>
      </List>
    </Card>
  );
};

export default SettingsSidebar;
