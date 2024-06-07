import { fetchRecommendationsForUser, fetchUserByTag } from "@/lib/services/apiService";
import BookSlider from "@/ui/book/bookSlider";
import UserSpeedDial from "@/ui/user/userSpeedDial";
import { Metadata } from "next";
import { cookies } from "next/headers";

export async function generateMetadata(
  { params: { tag } }: { params: { tag: string } }): Promise<Metadata> {
  return {
    title: decodeURIComponent(tag)
  }
}

export default async function Page({ params: { tag } }: { params: { tag: string } }) {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value as string;
  const user = await fetchUserByTag(tag);
  const recommendations = await fetchRecommendationsForUser(token);

  return (
    <main className="w-screen min-h-[calc(100vh-295px)] overflow-x-hidden">
      <div className="w-screen h-full min-h-full flex flex-col items-center justify-start">
        <div className="w-[97%] min-h-full h-full flex flex-col items-center">
          <BookSlider defaultBooks={user?.tbrBooks} title={"TBR"} />
          <BookSlider defaultBooks={recommendations ? recommendations : []} title={"Recommended from Past Reads"} />
          <BookSlider defaultBooks={user?.hasReadBooks} title={"Past Read"} />
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
    </main>
  );
}
