import { BookResponse } from "@/lib/models/book";
import { List, ListItem, Spinner, Typography } from "@/providers/coreProviders";
import Link from "next/link";
import SuggestionCard from './suggestionCard';
import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({ subsets: ["latin"] });

const SuggestionCards: React.FC<{ suggestions: BookResponse[], searchTerm: string, isLoading: boolean }> = ({ suggestions, searchTerm, isLoading}) => {
  return (
    <List className={`relative rounded w-full flex flex-col p-0 py-1 -ml-[2px] ${advent.className}`}>
      {suggestions.slice(0, 5).map((book, key) => (
<!--         <Link key={key} href={`book/${book.id}`} className="relative">
          <ListItem className="p-1 hover:bg-rose -my-1 dark:hover:bg-pink-lavender/80 relative"> -->
        <Link key={key} href={`book/${book.id}`} className="relative z-20">
          <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-rose/60 z-20 relative">
            <SuggestionCard book={book} />
          </ListItem>
        </Link>
      ))}
      <Link href={`../search/${searchTerm}`}>
<!--         <ListItem className="p-1 hover:bg-eggplant/60 -my-1 dark:hover:bg-pink-lavender/80 relative">
          <div className="flex items-center h-8 p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full"> -->
        <ListItem className="p-1 hover:bg-eggplant/60 dark:hover:bg-rose/60 -my-1 z-20">
          <div className="flex items-center h-8 p-2 bg-parchment/70 dark:bg-onyx border border-eggplant dark:border-rose/70 text-eggplant dark:text-rose/70 rounded-md shadow-sm space-x-2 w-full z-20">
            <Typography variant="h6" className="text-lg">See Results...</Typography>
          </div>
        </ListItem>
      </Link>
    </List>
  )
};

export default SuggestionCards;
