'use client';

import { Button, ChevronDownIcon, Menu, MenuHandler, MenuList, Typography } from '@/providers';
import React, { useState } from 'react';
import SearchTabs from "./searchTabs";
import { Lusitana } from 'next/font/google';

const lusi = Lusitana({ subsets: ["latin"], weight: "400" });

const AdvancedSearchMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Button
                        className='w-[45%] h-12 flex items-center justify-center bg-transparent'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ripple={true}
                    >
                        <Typography className={`${lusi.className} normal-case text-nowrap tracking-wider flex items-center ml-2 underline underline-offset-4`} variant='lead' as='p'>
                            Advanced Search
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-5 w-5 ml-1 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            {/* <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            /> */}
                        </Typography>
                    </Button>
                </MenuHandler>
                <MenuList>
                    <SearchTabs />
                </MenuList>
            </Menu>
        </React.Fragment>
    );
};

export default AdvancedSearchMenu;
