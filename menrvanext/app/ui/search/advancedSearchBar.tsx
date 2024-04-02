'use client';

import { Button, Input, Typography } from '@/providers';
import { Lusitana } from 'next/font/google';
import React, { useState } from 'react'

const lusi = Lusitana({ subsets: ["latin"], weight: "400" });

const AdvancedSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Debounce this call if implementing autocomplete or instant search
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would dispatch the search action, including any active filters
        console.log("Search submitted for:", searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-row w-full gap-3 m-2 justify-between'>
            <Input
                className={`${lusi.className} w-4/5`}
                type="text"
                color="light-blue"
                size="lg"
                placeholder="Search for books, authors, genres..."
                label="Search"
                // * for no label:
                // * labelProps={{
                // *     className: "before:content-none after:content-none content-none",
                // * }}
                // * containerProps={{
                // *     className: "min-w-0"
                // * }}
                onChange={handleInputChange}
            />
            <Button
                type="submit"
                color="light-blue"
                className='h-11 flex items-center'
            >
                <Typography className={`${lusi.className} normal-case text-xl tracking-wider`} type='lead'>
                    Search
                </Typography>
            </Button>
        </form>
    )
}

export default AdvancedSearchBar;