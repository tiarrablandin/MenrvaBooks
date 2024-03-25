'use client';

import { fetchBooks, fetchNewReleases, fetchRecommendationsForUser } from "@/app/services/apiService";
import BookSlider from "../bookSlider";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/app/lib/store/userSlice";

const UserComponent = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  const wrappedFetchRecommendationsForUser = () => fetchRecommendationsForUser(user!!.username);


  return (
    <div className="w-screen h-full flex flex-col items-center justify-start">
      <div className="w-[97%] flex flex-col items-center">
        {user ? (<BookSlider fetchData={wrappedFetchRecommendationsForUser} title={"Recommendations"} />) : <></>}
        <BookSlider fetchData={fetchBooks} title={"All Books"} />
        <BookSlider fetchData={fetchNewReleases} title={"New Releases"} />
        <BookSlider fetchData={fetchNewReleases} title={""} />
        <BookSlider fetchData={fetchBooks} title={""} />
      </div>
    </div>
  );
};

export default UserComponent;
