import {
  fetchLikedBooksForUser,
  fetchUserReadBooksByTag,
  fetchRecommendationsForUser,
  fetchUserByTag,
} from "@/app/lib/services/apiService";
import { cookies } from "next/headers";
import BookSlider from "../book/bookSlider";

const UserComponent = async () => {
  const cookieStore = cookies();
  const tag = cookieStore.get("tag")?.value;
  const user = await fetchUserByTag(tag || "null");
  const token = cookieStore.get("jwt")?.value;
  const interested = user?.bookInteractions? user?.bookInteractions.map((interaction) =>
    interaction.interested ? interaction.book : null
  ): [];

  const wrappedFetchRecommendationsForUser = async () => {
    "use server";
    return fetchRecommendationsForUser(tag!!);
  };

  // const wrappedFetchTBRBooksForUser = async () => {
  //   'use server';
  //   return fetchInterestedBooksForUser(tag!!);
  // }

  const wrappedFetchReadBooksForUser = async () => {
    "use server";
    return fetchUserReadBooksByTag(tag!!);
  };

  console.log(user);
  console.log(interested);
  console.log(token);
  console.log(tag);

  return user ? (
    <div className="w-screen h-full flex flex-col items-center justify-start">
      <div className="w-[97%] flex flex-col items-center">
        <BookSlider fetchData={wrappedFetchReadBooksForUser} title={"TBR"} />
        <BookSlider
          fetchData={wrappedFetchRecommendationsForUser}
          title={"Recommended from Past Reads"}
        />
        <BookSlider fetchData={wrappedFetchReadBooksForUser} title={"Past Read"} />
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
