'use client';

import { ChevronDownIcon, Menu, MenuHandler, MenuList, Typography } from '@/providers';
import React, { useState } from 'react';
import SearchTabs from "./searchTabs";

const AdvancedSearchMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="button" className={`normal-case text-nowrap tracking-wider flex items-center ml-2 underline underline-offset-4 text-eggplant dark:text-old-lace`} variant='lead' >
                        Advanced Search
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`hidden h-5 w-5 ml-1 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`block h-4 w-4 mx-2 transition-transform lg:hidden ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </Typography>
                </MenuHandler>
                <MenuList className="bg-old-lace border-2 border-pink-lavender text-eggplant dark:bg-onyx dark:text-old-lace dark:border-chinese-violet">
                    <SearchTabs />
                </MenuList>
            </Menu>
        </React.Fragment>
    );
};

export default AdvancedSearchMenu;
