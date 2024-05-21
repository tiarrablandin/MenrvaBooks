'use client'

import { clearSuggestions } from "@/app/lib/store/searchSlice";
import { RootState, useAppDispatch } from "@/app/lib/store/store";
import { List, ListItem, Typography } from "@/providers";
import Link from "next/link";
import { useSelector } from 'react-redux';
import SuggestionCard from './suggestionCard';

const SuggestionCards = () => {
  const dispatch = useAppDispatch();
  const { suggestions, searchTerm } = useSelector((state: RootState) => state.search);

  const handleClick = async () => {
    dispatch(clearSuggestions());
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  return searchTerm ? (
    <List className="relative rounded w-full flex flex-col p-0 py-1 -ml-[2px]">
      {suggestions.map((book, key) => (
        <Link key={key} href={`book/${book.id}`}>
          <ListItem onClick={handleClick} className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
            <SuggestionCard book={book} />
          </ListItem>
        </Link>
      ))}
      {
        suggestions[0] ?
          <Link href={`../search/${searchTerm}`}>
            <ListItem onClick={handleClick} className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80">
              <div className="flex items-center h-8 p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
                <Typography variant="h6">See Results...</Typography>
              </div>
            </ListItem>
          </Link>
          :
          <></>
      }
    </List>
  ) : <></>
};

export default SuggestionCards;
