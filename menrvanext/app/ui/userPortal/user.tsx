import React from "react";
import BookSlider from "../bookSlider";
import { fetchBooks, fetchNewReleases } from "@/app/services/apiService";
import SearchBar from "../searchBar";

const UserComponent = () => {
  return (
    <div className="w-screen h-full flex flex-col items-center justify-start">
      <div className="w-[97%] flex flex-col items-center">
        <SearchBar />
        <BookSlider callback={fetchBooks} title={"All Books"} />
        <BookSlider callback={fetchNewReleases} title={"New Releases"} />
        <BookSlider callback={fetchBooks} title={""} />
        <BookSlider callback={fetchNewReleases} title={""} />
        <BookSlider callback={fetchBooks} title={""} />
      </div>
    </div>
  );
};

export default UserComponent;
