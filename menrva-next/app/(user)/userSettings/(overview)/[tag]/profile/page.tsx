import Profile from "@/ui/user/settings/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
};

export default async function Page() {
  return (
    <main className="min-h-[calc(100vh-295px)] h-[97%] my-auto w-[calc(100%-4rem)] mr-1 ml-auto">
      <Profile />
    </main>
  );
}