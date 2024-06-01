'use client';

import { BookResponse } from '@/lib/models/book';
import { fetchSearchResults } from '@/lib/services/apiService';
import { Input } from '@/providers/coreProviders';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';
import SuggestionCards from './suggestionCards';
import { Advent_Pro } from 'next/font/google';
import { useAppDispatch, useAppSelector } from '@/lib/store/store';

const advent = Advent_Pro({ subsets: ["latin"] });

const AdvancedSearchComponent = () => {
    const router = useRouter();
    const theme = useAppSelector((state) => state.theme.theme);
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
                    color={theme  === "light" ? "black" : "white"}
                    type="text"
                    size="lg"
                    label="Search"
                    labelProps={{
                        className: "text-old-lace"
                    }}
                    className={`${advent.className} tracking-wide text-[1.15rem]`}
                    onChange={handleInputChange}
                    value={searchTerm}
                    onFocus={handleFocus}
                    onBlur={handleBlur} />
            </form>
            {isFocused && suggestions.length > 0 && (
                <Suspense fallback={<p>Loading...</p>}>
                    <SuggestionCards suggestions={suggestions} searchTerm={searchTerm} />
                </Suspense>
                // <List className="relative rounded w-full flex flex-col p-0 py-1 -ml-[2px]">
                //     {suggestions.slice(0, 5).map((book, key) => (
                //         <Link key={key} href={`book/${book.id}`}>
                //             <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
                //                 <SuggestionCard book={book} />
                //             </ListItem>
                //         </Link>
                //     ))}
                //     <Link href={`../search/${searchTerm}`}>
                //         <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
                //             <div className="flex items-center h-8 p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
                //                 <p>See Results...</p>
                //             </div>
                //         </ListItem>
                //     </Link>
                // </List>
            )}
        </div>
    );
};

export default AdvancedSearchComponent;
