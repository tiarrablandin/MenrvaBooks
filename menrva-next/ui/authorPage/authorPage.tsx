import { Author } from "@/lib/models/author";
import { fetchAuthorBooksById, fetchBooks } from "@/lib/services/apiService";
import BookSlider from "../book/bookSlider";
import AnnouncementsCard from "./announcementsCard";
import AuthorCard from "./authorCard";

interface AuthorPageProps {
  id: number;
  token: string | undefined;
  author: Author;
}

const AuthorPage: React.FC<AuthorPageProps> = ({ author, id, token }) => {
  async function fetchAllBooksByAuthorSlider() {
    "use server";
    return fetchAuthorBooksById(id);
  }

  async function fetchAllSeriesByAuthorSlider() {
    "use server";
    return fetchBooks();
  }

  return (
    <div>
      <div className="flex justify-center flex-nowrap sm:flex-wrap gap-8 my-8 mx-4">
        <AuthorCard author={author} token={token} />
        <AnnouncementsCard />
      </div>
      <div className="w-min h-full flex flex-col items-center ml-2">
        <BookSlider fetchData={fetchAllBooksByAuthorSlider} title={"Books from this Author"} />
        {/* <BookSlider fetchData={fetchAllBooksSlider} title={"Stand Alone"} /> */}
      </div>
    </div>
  );
};

export default AuthorPage;
