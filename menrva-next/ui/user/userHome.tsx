import {
  fetchRecommendationsForUser,
  fetchUserByTag
} from "@/lib/services/apiService";
import BookSlider from "../book/bookSlider";
import UserSpeedDial from "./userSpeedDial";
import React from "react";

const UserComponent: React.FC<{ tag: string, token: string }> = React.memo(async ({ tag, token }) => {
  const user = await fetchUserByTag(tag);
  const recommendations = await fetchRecommendationsForUser(token);

  return user ? (
    <div className="w-screen h-full min-h-full flex flex-col items-center justify-start">
      <div className="w-[97%] min-h-full h-full flex flex-col items-center">
        <BookSlider defaultBooks={user.tbrBooks} title={"TBR"} />
        <BookSlider defaultBooks={recommendations ? recommendations : []} title={"Recommended from Past Reads"} />
        <BookSlider defaultBooks={user.hasReadBooks} title={"Past Read"} />
        {/* 
        <BookSlider fetchData={fetchBooks} title={"Upcoming Releases for You"} />
        <BookSlider fetchData={fetchBooks} title={"Series in Progress"} />
        <BookSlider fetchData={fetchBooks} title={"New Releases from Authors you Follow"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} />
        <BookSlider fetchData={fetchBooks} title={"Liked Genre"} /> */}
        <UserSpeedDial tag={tag} />
      </div>
    </div>
  ) : (
    <></>
  );
});

export default UserComponent;
