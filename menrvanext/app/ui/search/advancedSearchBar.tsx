'use client';

import { clearSuggestions, clearSuggestionsAndTerm, fetchSuggestions, setSearchTerm } from "@/app/lib/store/searchSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { Input } from '@/providers';
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";

const AdvancedSearchBar = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { searchTerm, suggestions } = useSelector((state: RootState) => state.search);
    const inputRef = useRef<HTMLInputElement>(null);

    // const debouncedSetSearchTerm = debounce((value) => {
    //     dispatch(setSearchTerm(value));
    // }, 300);

    useEffect(() => {
        if (searchTerm && searchTerm.length > 0) {
            dispatch(fetchSuggestions(searchTerm))
        } else if (!searchTerm || searchTerm === "") {
            dispatch(clearSuggestions());
        }
    }, [searchTerm, dispatch]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value;
        if (value === "") { dispatch(clearSuggestions()) }
        dispatch(setSearchTerm(value));
    };

    const handleFocus = () => {
        if (searchTerm) {
            dispatch(fetchSuggestions(searchTerm));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`../search/${searchTerm}`);
        dispatch(clearSuggestionsAndTerm());
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-3 container'>
            <Input
                ref={inputRef}
                type="text"
                size="lg"
                label="Search"
                placeholder="Search for books, authors, genres..."
                onChange={handleInputChange}
                onBlur={() => { dispatch(clearSuggestions()); }}
                onFocus={handleFocus}
                value={searchTerm}
            />
        </form>
    )
}

export default AdvancedSearchBar;
