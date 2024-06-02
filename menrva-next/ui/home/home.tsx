import { fetchBooks, fetchNewReleases } from "@/lib/services/apiService";
import BookSlider from "../book/bookSlider";
import Banner from "./banner";
import React from "react";

// Advanced Search
// Trending based off of people reading
// Announcements?

const HomeComponent: React.FC = React.memo(() => {
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
      <Banner />
      {/* temporarily commenting out new releases */}
      {/* <BookSlider fetchData={fetchNewReleasesSlider} title={"New Releases"} /> */}
      <div className="w-[95%]">
        <BookSlider fetchData={fetchAllBooksSlider} title={"All Books"} />
      </div>
    </div>
  );
});

export default HomeComponent;
