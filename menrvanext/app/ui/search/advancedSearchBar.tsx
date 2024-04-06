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
                className={`${lusi.className} w-4/5 focus:!border-l-eggplant focus:!border-r-eggplant focus:!border-b-eggplant focus:!border-l-2 focus:!border-r-2 focus:!border-b-2`}
                labelProps={{
                    className: "peer-focus:before:!border-t-eggplant peer-focus:before:!border-t-2 peer-focus:before:!border-l-eggplant peer-focus:before:!border-l-2 peer-focus:after:!border-t-eggplant peer-focus:after:!border-t-2 peer-focus:after:!border-r-eggplant peer-focus:after:!border-r-2 peer-focus:before:mt-[6px] peer-focus:after:mt-[6px]",
                }}
                type="text"
                size="lg"
                placeholder="Search for books, authors, genres..."
                label="Search"
                onChange={handleInputChange}
            />
            <Button
                type="submit"
                className='h-11 flex items-center bg-eggplant'
            >
                <Typography className={`${lusi.className} normal-case text-xl tracking-wider bg-eggplant text-gray-100 lg:text-2xl`} type='lead'>
                    Search
                </Typography>
            </Button>
        </form>
    )
}

export default AdvancedSearchBar;