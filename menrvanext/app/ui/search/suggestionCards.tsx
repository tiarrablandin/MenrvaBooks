'use client'

import { RootState } from "@/app/lib/store/store";
import { useSelector } from 'react-redux';
import SuggestionCard from './suggestionCard';
import { List, ListItem, Typography } from "@/providers";

const SuggestionCards = () => {
  const { suggestions } = useSelector((state: RootState) => state.search);

  return (
    <List className="rounded w-[72.5%] flex flex-col p-0 py-1 -ml-[2px] z-10">
      {suggestions.map((book, key) => (
        <ListItem key={key} className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
          <SuggestionCard key={book.id} book={book} />
        </ListItem>
      ))}
      {
        suggestions[0] ?
          <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
            <div className="flex items-center h-8 p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
              <Typography variant="h6">See Results...</Typography>
            </div>
          </ListItem> :
          <></>
      }
    </List>
  );
};

export default SuggestionCards;
