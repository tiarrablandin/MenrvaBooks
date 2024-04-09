import { fetchBooks } from "@/app/lib/services/apiService";
import BookSlider from "../book/bookSlider";
import AnnouncementsCard from "./announcementsCard";
import AuthorCard from "./authorCard";

interface AuthorPageProps {}

const AuthorPage: React.FC<AuthorPageProps> = ({}) => {
  async function fetchAllBooksSlider() {
    "use server";
    return fetchBooks();
  }

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-8 my-8">
        <AuthorCard />
        <AnnouncementsCard />
      </div>
      <div className="w-screen h-full flex flex-col items-center">
        <BookSlider fetchData={fetchAllBooksSlider} title={"Upcoming Releases"} />
        <BookSlider fetchData={fetchAllBooksSlider} title={"Series Name"} />
        <BookSlider fetchData={fetchAllBooksSlider} title={"Stand Alone"} />
      </div>
    </div>
  );
};

export default AuthorPage;
