'use client';

import { Button, Menu, MenuHandler, MenuList, Typography } from '@/providers';
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
                        className='w-[45%] h-12 flex items-center justify-center'
                        color="light-blue"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ripple={true}
                    >
                        <Typography className={`${lusi.className} normal-case text-nowrap tracking-wider`} variant='lead' as='p'>Advanced Search</Typography>
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
