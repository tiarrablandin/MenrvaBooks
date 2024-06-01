import { BookResponse } from "@/lib/models/book";
import Image from "next/image";
import React from 'react';

const SuggestionCard: React.FC<{ book: BookResponse }> = ({ book }) => {
    return (
        <div className="flex items-center p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
            <Image
                src={book.cover}
                alt={book.title}
                className="h-14 w-10 object-cover rounded-md"
                width={50}
                height={150}
            />
            <div className="flex flex-col gap-2">
                <span className="text-lg font-medium text-gray-900">{book.title}</span>
                {book.authors ? <span className="text-gray-600">{book.authors[0]?.penName || 'Unknown Author'}</span> : <></>}
            </div>
        </div>
    );
};

export default SuggestionCard;