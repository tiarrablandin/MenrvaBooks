'use client';

import { fetchBooks, fetchNewReleases, fetchRecommendationsForUser } from "@/app/lib/services/apiService";
import BookSlider from "../book/bookSlider";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/app/lib/store/userSlice";
import SearchBar from "../searchBar";

const UserComponent = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  const wrappedFetchRecommendationsForUser = () => fetchRecommendationsForUser(user!!.username);

  return (
    <div className="w-screen h-full flex flex-col items-center justify-start">
      <div className="w-[97%] flex flex-col items-center">
        <SearchBar />
        <BookSlider fetchData={fetchNewReleases} title={"TBR"} />
        <BookSlider fetchData={fetchBooks} title={"Upcoming Releases for You"} />
        <BookSlider fetchData={fetchBooks} title={"Series in Progress"} />
        {user ? (<BookSlider fetchData={wrappedFetchRecommendationsForUser} title={"Recommended from Past Reads"} />) : <></>}
        <BookSlider fetchData={fetchBooks} title={"New Releases from Authors you Follow"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Past Read"} />
      </div>
    </div>
  );
};

export default UserComponent;