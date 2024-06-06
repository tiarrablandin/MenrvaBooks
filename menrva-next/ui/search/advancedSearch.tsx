'use client';

import { BookResponse } from '@/lib/models/book';
import { fetchSearchResults } from '@/lib/services/apiService';
import { Input } from '@/providers/coreProviders';
import { debounce } from 'lodash';
import { Advent_Pro } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { Suspense, use, useCallback, useEffect, useState } from 'react';
import SuggestionCards from './suggestionCards';

const advent = Advent_Pro({ subsets: ["latin"] });

const fetchSuggestions = async (term: string) => {
    const fetchedSuggestions = await fetchSearchResults(term);
    return fetchedSuggestions;
};

const SuspensefulSuggestionCards: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
    const suggestions = use(fetchSuggestions(searchTerm));
    return <SuggestionCards suggestions={suggestions ? suggestions : []} searchTerm={searchTerm} />;
};

const AdvancedSearchComponent: React.FC<{ theme: string }> = ({ theme }) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Wrap the function with debounce and useCallback
    const debouncedFetchSuggestions = useCallback(debounce((term) => {
        fetchSuggestions(term);
    }, 300), [fetchSuggestions]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`/search/${searchTerm}`);
        setSearchTerm("");
    };

    const handleFocus = () => { setIsFocused(true); };

    // Delay hiding the suggestions to allow click events on suggestions to be registered
    const handleBlur = () => { setTimeout(() => setIsFocused(false), 200); };

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
            {isFocused && searchTerm && (
                <Suspense fallback={<>Loading...</>}>
                    <SuspensefulSuggestionCards searchTerm={searchTerm} />
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
