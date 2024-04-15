'use client'

import { RootState } from "@/app/lib/store/store";
import { useSelector } from 'react-redux';
import SuggestionCard from './suggestionCard';
import { List, ListItem } from "@/providers";

const SuggestionCards = () => {
  const { suggestions } = useSelector((state: RootState) => state.search);

  return (
    <List className="rounded w-[72.5%] flex flex-col p-0 py-1 -ml-[2px]">
      {suggestions.map((book, key) => (
        <ListItem key={key} className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
          <SuggestionCard key={book.id} book={book} />
        </ListItem>
      ))}
    </List>
  );
};

export default SuggestionCards;
