'use client';

import { fetchSuggestions, setSearchTerm } from "@/app/lib/store/searchSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { Button, eggplant, Input, Typography } from '@/providers';
import { debounce } from "lodash";
import { Lusitana } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const lusi = Lusitana({ subsets: ["latin"], weight: "400" });

const AdvancedSearchBar = () => {
    const dispatch = useAppDispatch();
    const { searchTerm, suggestions } = useSelector((state: RootState) => state.search);
    const [inputValue, setInputValue] = useState("");

    const debouncedSetSearchTerm = debounce((value) => {
        dispatch(setSearchTerm(value));
    }, 300)

    useEffect(() => {
        if (searchTerm && searchTerm.length > 2) {
            dispatch(fetchSuggestions(searchTerm))
        }
    }, [searchTerm, dispatch]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value); // Update inputValue which is local component state
        if (event.target.value === "") { dispatch(fetchSuggestions("")) }
        debouncedSetSearchTerm(event.target.value);
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
                className={`${lusi.className} w-4/5 border-eggplant placeholder-shown:border-2 placeholder-shown:border-eggplant placeholder-shown:border-t-eggplant placeholder-shown:border-t-2`}
                type="text"
                size="lg"
                placeholder="Search for books, authors, genres..."
                label="Search"
                // * for no label:
                labelProps={{
                    // className: "before:content-none after:content-none content-none",
                    className: "before:border-l-2 before:border-t-2 focus:before:!content-none after:!mt-[6px] before:!mt-[6px] ",
                }}
                containerProps={{
                    className: "min-w-0 "
                }}
                onChange={handleInputChange}
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