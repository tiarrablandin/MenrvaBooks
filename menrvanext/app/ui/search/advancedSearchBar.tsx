'use client';

import { clearSuggestions, fetchSuggestions, setSearchTerm } from "@/app/lib/store/searchSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { Button, Input, Typography } from '@/providers';
import { debounce } from "lodash";
import { Lusitana } from 'next/font/google';
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

const lusi = Lusitana({ subsets: ["latin"], weight: "400" });

const AdvancedSearchBar = () => {
    const dispatch = useAppDispatch();
    const { searchTerm } = useSelector((state: RootState) => state.search);

    const debouncedSetSearchTerm = debounce((value) => {
        dispatch(setSearchTerm(value));
    }, 300)

    useEffect(() => {
        if (searchTerm && searchTerm.length > 0) {
            dispatch(fetchSuggestions(searchTerm))
        }
    }, [searchTerm, dispatch]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "") { dispatch(clearSuggestions()) }
        debouncedSetSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // * placeholder for dispatching search and navigating to book page.
        console.log("Search submitted for:", searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-row w-full gap-3 m-2 justify-between'>
            <Input
                // * THIS WORKS FOR CHANGING INPUT BORDER COLOR
                className={`${lusi.className} w-4/5 border-l-eggplant border-r-eggplant border-b-eggplant border-l-2 border-r-2 border-b-2`}
                labelProps={{
                    className: "before:border-t-2 before:border-t-eggplant before:border-l-2 before:border-l-eggplant  after:border-t-2 after:border-t-eggplant after:border-r-2 after:border-r-eggplant",
                }}
                // * for no label
                // className={`${lusi.className} w-4/5 !border-[#673c4f] scale-[92%] placeholder:text-[#673c4f] focus:!border-[#673c4f/80]`}
                // containerProps={{
                //     className: "min-w-[288px]",
                // }}
                type="text"
                size="lg"
                placeholder="Search for books, authors, genres..."
                label="Search"
                onChange={handleInputChange}
            // * DON'T USE CUSTOM COLORS RIGHT NOW FOR INPUTS
            // color="gray"
            />
            <Button
                type="submit"
                className='h-11 flex items-center bg-eggplant'
            >
                <Typography className={`${lusi.className} normal-case text-xl tracking-wider bg-eggplant`} type='lead'>
                    Search
                </Typography>
            </Button>
        </form>
    )
}

export default AdvancedSearchBar;