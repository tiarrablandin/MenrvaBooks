import BookSlider from "@/components/CardSlider/BookSlider/BookSlider";
import SearchBar from "@/components/Search/SearchBar";
import React from "react";

const HomeView: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start">
      <SearchBar />
      <BookSlider />
    </div>
  );
};

export default HomeView;
