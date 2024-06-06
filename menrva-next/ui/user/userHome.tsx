import { BookResponse } from "@/lib/models/book";
import { User } from "@/lib/models/user";
import React from "react";
import BookSlider from "../book/bookSlider";
import UserSpeedDial from "./userSpeedDial";

const UserComponent: React.FC<{ user: User, recommendations: BookResponse[] }> = React.memo(async ({ user, recommendations }) => {
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
        <UserSpeedDial tag={user.tag} />
      </div>
    </div>
  ) : (
    <></>
  );
});

export default UserComponent;
