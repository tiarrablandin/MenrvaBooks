import { fetchAuthorBooksById, fetchBooks } from "@/app/lib/services/apiService";
import BookSlider from "../book/bookSlider";
import AnnouncementsCard from "./announcementsCard";
import AuthorCard from "./authorCard";
import { Author } from "@/app/lib/models/author";
import InitializeUserFollowsAuthor from "./initializeUserFollowsAuthor";

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
      <div className="flex justify-center flex-wrap gap-8 my-8">
        <AuthorCard author={author} />
        <AnnouncementsCard />
      </div>
      <div className="w-screen h-full flex flex-col items-center">
        <BookSlider fetchData={fetchAllBooksByAuthorSlider} title={"Books from this Author"} />
        {/* <BookSlider fetchData={fetchAllBooksSlider} title={"Stand Alone"} /> */}
      </div>
    </div>
  );
};

export default AuthorPage;
