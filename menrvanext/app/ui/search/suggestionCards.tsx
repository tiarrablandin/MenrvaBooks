'use client'

import { RootState } from "@/app/lib/store/store";
import { useSelector } from 'react-redux';
import SuggestionCard from './suggestionCard';
import { List, ListItem } from "@/providers";

const SuggestionCards = () => {
  const { suggestions } = useSelector((state: RootState) => state.search);

  return (
    <List className="-mt-1 rounded w-[72.5%] mr-auto ml-1 flex flex-col p-0 py-1">
      {suggestions.map((book) => (
        <ListItem className="p-1 hover:bg-eggplant/60 -my-1">
          <SuggestionCard key={book.id} book={book} />
        </ListItem>
      ))}
    </List>
  );
};

export default SuggestionCards;
