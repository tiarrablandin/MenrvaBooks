'use client';

import { debounce } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import SuggestionCard from './suggestionCard';
import { BookResponse } from '@/lib/models/book';
import { fetchSearchResults } from '@/lib/services/apiService';
import { Input, List, ListItem, Typography } from '@/providers/coreProviders';

const AdvancedSearchComponent = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<BookResponse[]>([]);
    const [isFocused, setIsFocused] = useState(false);

    const fetchSuggestions = useCallback(async (term: string) => {
        const fetchedSuggestions = await fetchSearchResults(term);
        if (fetchedSuggestions) setSuggestions(fetchedSuggestions);
    }, []);

    // Wrap the function with debounce and useCallback
    const debouncedFetchSuggestions = useCallback(debounce((term) => {
        fetchSuggestions(term);
    }, 300), [fetchSuggestions]);

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
        if (event.target.value === "") setSuggestions([]);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`/search/${searchTerm}`);
        setSuggestions([]);
        setSearchTerm("");
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (searchTerm) {
            debouncedFetchSuggestions(searchTerm);
        }
    };

    const handleBlur = () => {
        // Delay hiding the suggestions to allow click events on suggestions to be registered
        setTimeout(() => setIsFocused(false), 200);
        // setSuggestions
    };

    return (
        <div className="flex flex-col w-4/5 h-12 mx-auto">
            <form onSubmit={handleSubmit} className='flex gap-3 container'>
                <Input
                    type="text"
                    size="lg"
                    label="Search"
                    placeholder="Search for books, authors, genres..."
                    onChange={handleInputChange}
                    value={searchTerm}
                    onFocus={handleFocus}
                    onBlur={handleBlur} crossOrigin={undefined}                />
            </form>
            {isFocused && suggestions.length > 0 && (
                <List className="relative rounded w-full flex flex-col p-0 py-1 -ml-[2px]">
                    {suggestions.slice(0, 5).map((book, key) => (
                        <Link key={key} href={`book/${book.id}`}>
                            <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
                                <SuggestionCard book={book} />
                            </ListItem>
                        </Link>
                    ))}
                    <Link href={`../search/${searchTerm}`}>
                        <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
                            <div className="flex items-center h-8 p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
                                <Typography variant="h6">See Results...</Typography>
                            </div>
                        </ListItem>
                    </Link>
                </List>
            )}
        </div>
    );
};

export default AdvancedSearchComponent;
