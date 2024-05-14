import { User } from "@/app/lib/models/user";
import {
  fetchRecommendationsForUser,
  fetchUserByTag,
  fetchUserReadBooksByTag
} from "@/app/lib/services/apiService";
import BookSlider from "../book/bookSlider";

const UserComponent: React.FC<{ tag: string }> = async ({ tag }) => {
  const user = await fetchUserByTag(tag);

  const interested = user?.bookInteractions
    ? user?.bookInteractions
      .filter((interaction) => interaction.interested)
      .map((interaction) => interaction.book)
    : [];

  console.log('****#***#***#****' + JSON.stringify(user?.likedBooks));

  const wrappedFetchRecommendationsForUser = async () => {
    "use server";
    return fetchRecommendationsForUser(user?.tag!!);
  };

  // const wrappedFetchTBRBooksForUser = async () => {
  //   'use server';
  //   return fetchBooksForUser(tag!!);
  // }

  const wrappedFetchReadBooksForUser = async () => {
    "use server";
    return fetchUserReadBooksByTag(user?.tag!!);
  };


  return user ? (
    <div className="w-screen h-full flex flex-col items-center justify-start">
      <div className="w-[97%] flex flex-col items-center">
        <BookSlider defaultBooks={user.tbrBooks} title={"TBR"} />
        <BookSlider fetchData={wrappedFetchRecommendationsForUser} title={"Recommended from Past Reads"} />
        <BookSlider defaultBooks={user.hasReadBooks} title={"Past Read"} />
        {/* 
        <BookSlider fetchData={fetchBooks} title={"Upcoming Releases for You"} />
        <BookSlider fetchData={fetchBooks} title={"Series in Progress"} />
        {user ? (<BookSlider fetchData={wrappedFetchRecommendationsForUser} title={"Recommended from Past Reads"} />) : <></>}
        <BookSlider fetchData={fetchBooks} title={"New Releases from Authors you Follow"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} /> */}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UserComponent;
