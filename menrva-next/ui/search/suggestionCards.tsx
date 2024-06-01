import { BookResponse } from "@/lib/models/book";
import { List, ListItem, Typography } from "@/providers/coreProviders";
import Link from "next/link";
import SuggestionCard from './suggestionCard';
import { Advent_Pro } from "next/font/google";

const advent = Advent_Pro({ subsets: ["latin"] });

const SuggestionCards: React.FC<{ suggestions: BookResponse[], searchTerm: string }> = ({ suggestions, searchTerm }) => {
  return (
    <List className={`relative rounded w-full flex flex-col ${advent.className}`}>
      {suggestions.slice(0, 5).map((book, key) => (
        <Link key={key} href={`book/${book.id}`}>
          <ListItem className="p-1 bg-eggplant  dark:hover:bg-pink-lavender/80">
            <SuggestionCard book={book} />
          </ListItem>
        </Link>
      ))}
      <Link href={`../search/${searchTerm}`}>
        <ListItem className="hover:bg-eggplant/60 dark:hover:bg-pink-lavender/80">
          <div className="flex items-center h-8 p-2 bg-white border border-gray-200 rounded-md shadow-sm space-x-2 w-full">
            <p className="text-lg">See Results...</p>
          </div>
        </ListItem>
      </Link>
    </List>
  )
};

export default SuggestionCards;
