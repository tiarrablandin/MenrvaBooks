import { fetchBooks, fetchNewReleases } from "@/app/lib/services/apiService";
import BookSlider from "../book/bookSlider";
import AdvancedSearchComponent from "../search/advancedSearch";
import BookSkeleton from "../book/bookSkeleton";

// Advanced Search
// Trending based off of people reading
// Announcements?

const HomeComponent: React.FC = () => {
  async function fetchNewReleasesSlider() {
    "use server";
    return fetchNewReleases();
  }

  async function fetchAllBooksSlider() {
    "use server";
    return fetchBooks();
  }
  
  return (
    <div className="w-screen h-full flex flex-col items-center">
      {/* temporarily commenting out new releases */}
      {/* <BookSlider fetchData={fetchNewReleasesSlider} title={"New Releases"} /> */}
      <BookSlider fetchData={fetchAllBooksSlider} title={"All Books"} />
    </div>
  );
};

export default HomeComponent;
