'use client';

import { clearSuggestions, fetchSuggestions, setSearchTerm } from "@/app/lib/store/searchSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { Input } from '@/providers';
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

const AdvancedSearchBar = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { searchTerm, suggestions } = useSelector((state: RootState) => state.search);

    const debouncedSetSearchTerm = debounce((value) => {
        dispatch(setSearchTerm(value));
    }, 300)

    useEffect(() => {
        if (searchTerm && searchTerm.length > 0) {
            dispatch(fetchSuggestions(searchTerm))
        } else if (!searchTerm || searchTerm === "") {
            dispatch(clearSuggestions());
        }
    }, [searchTerm, dispatch]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.value === "") { dispatch(clearSuggestions()) }
        // debouncedSetSearchTerm(event.target.value);
        dispatch(setSearchTerm(event.target.value));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // * placeholder for dispatching search and navigating to book page.
        dispatch(clearSuggestions());
        await new Promise(resolve => setTimeout(resolve, 0));
        console.log("Search submitted for:", searchTerm);
        router.push(`../search/${searchTerm}`)
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-3 container'>
            <Input
                type="text"
                size="lg"
                label="Search"
                placeholder="Search for books, authors, genres..."
                onChange={handleInputChange}
                value={searchTerm}
            />
        </form>
    )
}

export default AdvancedSearchBar;