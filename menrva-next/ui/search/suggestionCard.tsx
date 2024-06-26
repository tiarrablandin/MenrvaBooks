import { BookResponse } from "@/lib/models/book";
import Image from "next/image";
import React from 'react';

const SuggestionCard: React.FC<{ book: BookResponse }> = ({ book }) => {
    return (
//        <div className="flex relative z-20 items-center max-h-16 p-1 py-1 bg-deep-sea border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
        <div className="flex items-center max-h-16 p-1 py-1 bg-parchment dark:bg-onyx border border-eggplant dark:border-rose/70 rounded-md shadow-sm space-x-2 w-full opacity-95 hover:opacity-100 relative z-20">
            <Image
                src={book.cover}
                alt={book.title}
                className="min-h-14 w-10 object-cover rounded-md"
                width={50}
                height={150}
            />
            <div className="flex flex-col pl-3">
                <span className="text-lg font-medium text-eggplant dark:text-rose/70">{book.title}</span>
                {book.authors ? <span className="text-deep-sea dark:text-parchment/70">{book.authors[0]?.penName || 'Unknown Author'}</span> : <></>}
            </div>
        </div>
    );
};

export default SuggestionCard;