'use client'

import { RootState } from "@/app/lib/store/store";
import { useSelector } from 'react-redux';
import SuggestionCard from './suggestionCard';

const SuggestionCards = () => {
  const { suggestions } = useSelector((state: RootState) => state.search);

  return (
    <div className="suggestions-container w-[72.5%] ml-3" >
      {suggestions.map((book) => (
        <SuggestionCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default SuggestionCards;
