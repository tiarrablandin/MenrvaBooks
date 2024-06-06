'use client';

import { BookResponse } from '@/lib/models/book';
import { fetchSearchResults } from '@/lib/services/apiService';
import { Input, ListItem, Spinner } from '@/providers/coreProviders';
import { debounce } from 'lodash';
import { Advent_Pro } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import SuggestionCards from './suggestionCards';

const advent = Advent_Pro({ subsets: ["latin"] });

const AdvancedSearchComponent: React.FC<{ theme: string }> = ({ theme }) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<BookResponse[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchSuggestions = useCallback(async (term: string) => {
        const fetchedSuggestions = await fetchSearchResults(term);
        if (fetchedSuggestions) setSuggestions(fetchedSuggestions);
        setIsLoading(false);
    }, []);

    const debouncedFetchSuggestions = useCallback(debounce((term) => {
        fetchSuggestions(term);
    }, 200), [fetchSuggestions]);

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
        setIsLoading(true);
        setSearchTerm(event.target.value);
        if (event.target.value === "") { setSuggestions([]); setIsLoading(false); }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`/search/${searchTerm}`);
        setSuggestions([]);
        setSearchTerm("");
        setIsLoading(false);
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
    };

    return (
        <div className="flex flex-col w-4/5 h-12 mx-auto">
            <form onSubmit={handleSubmit} className='flex gap-3 container'>
                <Input
                    color={theme !== "dark" ? "black" : "white"}
                    type="text"
                    size="lg"
                    label="Search"
                    labelProps={{
                        className: "text-eggplant dark:text-old-lace"
                    }}
                    className={`${advent.className} text-eggplant dark:text-old-lace tracking-wide text-[1.15rem]`}
                    onChange={handleInputChange}
                    value={searchTerm}
                    onFocus={handleFocus}
                    onBlur={handleBlur} />
            </form>
            {isFocused && (isLoading ?
                <ListItem className="p-1 py-3 bg-white pointer-events-none">
                    <Spinner className="mx-auto" />
                </ListItem>
                :
                suggestions.length > 0 && <SuggestionCards suggestions={suggestions} searchTerm={searchTerm} isLoading={isLoading} />
            )}
        </div>
    );
};

export default AdvancedSearchComponent;
