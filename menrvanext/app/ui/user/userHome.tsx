import {
  fetchLikedBooksForUser,
  fetchRecommendationsForUser,
  fetchUserByTag
} from "@/app/lib/services/apiService";
import { cookies } from "next/headers";
import BookSlider from "../book/bookSlider";

const UserComponent = async () => {
  const cookieStore = cookies();
  const tag = cookieStore.get('tag')?.value;
  const user = await fetchUserByTag(tag || 'null');
  const token = cookieStore.get('jwt')?.value;

  const wrappedFetchRecommendationsForUser = async () => {
    'use server';
    return fetchRecommendationsForUser(tag!!);
  }

  const wrappedFetchLikedBooksForUser = async () => {
    'use server';
    return fetchLikedBooksForUser(tag!!);
  }

  console.log(user);
  console.log(token);
  console.log(tag);

  return (
    <div className="w-screen h-full flex flex-col items-center justify-start">
      <div className="w-[97%] flex flex-col items-center">
        {/* <BookSlider fetchData={fetchNewReleases} title={"TBR"} />
        <BookSlider fetchData={fetchBooks} title={"Upcoming Releases for You"} />
        <BookSlider fetchData={fetchBooks} title={"Series in Progress"} /> */}
        {user ? (<BookSlider fetchData={wrappedFetchLikedBooksForUser} title={"Books you've liked"} />) : <></>}
        {/* {user ? (<BookSlider fetchData={wrappedFetchRecommendationsForUser} title={"Recommended from Past Reads"} />) : <></>} */}
        {user ? (<BookSlider fetchData={wrappedFetchRecommendationsForUser} title={"Recommended from Past Reads"} />) : <></>}
        {/* <BookSlider fetchData={fetchBooks} title={"New Releases from Authors you Follow"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Past Read"} /> */}
      </div>
    </div>
  );
};

export default UserComponent;
