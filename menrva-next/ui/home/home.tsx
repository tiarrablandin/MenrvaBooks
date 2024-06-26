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
    <></>
  );
});

export default HomeComponent;
