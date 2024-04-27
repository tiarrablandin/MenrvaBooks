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

const Settings = () => {
  return (
    <div>
      <Card className="h-screen w-52 p-4 shadow-blue-gray-900/5 rounded-none bg-pink-lavender/50">
        <div className="mb-2 p-4">
          <Typography variant="h5" className="text-xl">
            Settings
          </Typography>
        </div>
        <List className="text-eggplant">
          <ListItem className="hover:bg-pink-lavender/40">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link href="/profile">
              <Typography variant="h6">Profile</Typography>
            </Link>
          </ListItem>
          <ListItem className="hover:bg-pink-lavender/40">
            <ListItemPrefix>
              <KeyIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Link href="/password">
            <Typography variant="h6">Password</Typography>
            </Link>
          </ListItem>
          <ListItem className="hover:bg-pink-lavender/40">
            <ListItemPrefix>
              <BellIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Link href="/notifications">
            <Typography variant="h6">Notifications</Typography>
            </Link>
          </ListItem>
          <ListItem className="hover:bg-pink-lavender/40">
            <ListItemPrefix>
              <ShieldCheckIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Link href="/security">
            <Typography variant="h6">Security</Typography>
            </Link>
          </ListItem>
          <ListItem className="hover:bg-pink-lavender/40">
            <ListItemPrefix>
              <CreditCardIconOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Link href="/payments">
            <Typography variant="h6">Payments</Typography>
            </Link>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default Settings;
