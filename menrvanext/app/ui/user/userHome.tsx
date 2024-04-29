"use client";

import { useAuth } from "@/app/lib/hooks/useAuth";
import {
  fetchBooks,
  fetchLikedBooksForUser,
  fetchNewReleases,
  fetchRecommendationsForUser,
} from "@/app/lib/services/apiService";
import { useEffect } from "react";
import BookSlider from "../book/bookSlider";

const UserComponent = () => {
  const { user, token } = useAuth();
  const wrappedFetchRecommendationsForUser = () => fetchRecommendationsForUser(user!!.tag);
  const wrappedFetchLikedBooksForUser = () => fetchLikedBooksForUser(user!!.tag);

  useEffect(() => {
    console.log(user);
    console.log(token);
    if (user) {
      wrappedFetchLikedBooksForUser();
      wrappedFetchRecommendationsForUser();
    }
  }, [user, token])

  return (
    <div className="w-screen h-full flex flex-col items-center justify-start">
      <div className="w-[97%] flex flex-col items-center">
        <BookSlider fetchData={fetchNewReleases} title={"TBR"} />
        <BookSlider fetchData={fetchBooks} title={"Upcoming Releases for You"} />
        <BookSlider fetchData={fetchBooks} title={"Series in Progress"} />
        {/* {user ? (<BookSlider fetchData={wrappedFetchLikedBooksForUser} title={"Books you've liked."} />) : <></>} */}
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
