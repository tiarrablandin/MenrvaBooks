'use client'

import React from 'react';
import { RootState } from "@/app/lib/store/store";
import { useSelector } from 'react-redux';
import BookCard from '../book/bookCard';

const SuggestionCards = () => {
  const { suggestions } = useSelector((state: RootState) => state.search);

  return (
    <div className="suggestions-container" >
      {suggestions.map((book) => (
        <BookCard key={book.id} book={book} /> // Render each suggestion as a BookCard
      ))}
    </div>
  );
};

export default SuggestionCards;
