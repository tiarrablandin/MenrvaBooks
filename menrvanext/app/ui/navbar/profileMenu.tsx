import { selectCurrentUser } from "@/app/lib/store/userSlice";
import { ArrowLeftStartOnRectangleIcon, ArrowRightEndOnRectangleIcon, Avatar, Button, ChevronDownIcon, HomeIcon, Menu, MenuHandler, MenuItem, MenuList, Typography, UserIcon } from "@/providers";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ProfileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const iconClass = "flex items-center gap-x-3 p-2 px-4 font-normal text-base";

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <div className="w-24 mx-2">
                    <Button
                        variant="text"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                        <Avatar className="w-10 h-10" variant="circular" size="sm" alt="tania andrew" src="https://docs.material-tailwind.com/img/face-2.jpg" />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                        />
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
                        <Link href="/home" className="flex items-center">
                            Home
                        </Link>
                    </Typography>
                </MenuItem>
                <MenuItem key="2" onClick={closeMenu} className="">
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
                <MenuItem key="3" onClick={closeMenu} className="">
                    {currentUser ? (
                        <Link href="/logout" className="flex items-center">
                            <Typography
                                as="li"
                                variant="small"
                                className={`${iconClass} transition-transform hover:scale-105 w-min cursor-pointer`}
                            >
                                <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
                                Logout
                            </ Typography>
                        </Link>
                    ) : (
                        <Link href="/login" className="flex items-center" >
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
        </Menu >
    );
}

export default ProfileMenu;