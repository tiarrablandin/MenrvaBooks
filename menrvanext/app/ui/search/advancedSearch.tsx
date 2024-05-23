'use client';

import { Input, List, ListItem, Typography } from '@/providers';
import { debounce } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import SuggestionCard from './suggestionCard';
import { BookResponse } from '@/app/lib/models/book';
import { fetchSearchResults } from '@/app/lib/services/apiService';

const AdvancedSearchComponent = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<BookResponse[]>([]);

    const fetchSuggestions = useCallback(async (term: string) => {
        const fetchedSuggestions = await fetchSearchResults(term);
        if (fetchedSuggestions) setSuggestions(fetchedSuggestions);
    }, []);

    // Wrap the function with debounce and useCallback
    const debouncedFetchSuggestions = useCallback(debounce((term) => {
        fetchSuggestions(term);
    }, 300), [fetchSuggestions]);

    // useEffect(() => {
    //     if (searchTerm) {
    //         debouncedFetchSuggestions(searchTerm);
    //     }
    // }, [searchTerm, debouncedFetchSuggestions]);

    useEffect(() => {
        if (searchTerm) {
            debouncedFetchSuggestions(searchTerm);
        } else {
            setSuggestions([]);
        }
        return () => {
            debouncedFetchSuggestions.cancel();
        };
    }, [searchTerm, debouncedFetchSuggestions]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`/search/${searchTerm}`);
        setSuggestions([]);
    };

    return (
        <div className="flex flex-col w-4/5">
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
            <List className="relative rounded w-full flex flex-col p-0 py-1 -ml-[2px]">
                {suggestions.slice(0, 5).map((book, key) => (
                    <Link key={key} href={`book/${book.id}`}>
                        <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
                            <SuggestionCard book={book} />
                        </ListItem>
                    </Link>
                ))}
                {
                    suggestions[0] ?
                        <Link href={`../search/${searchTerm}`}>
                            <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
                                <div className="flex items-center h-8 p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
                                    <Typography variant="h6">See Results...</Typography>
                                </div>
                            </ListItem>
                        </Link>
                        :
                        <></>
                }
            </List>
        </div>
    );
};

export default AdvancedSearchComponent;
