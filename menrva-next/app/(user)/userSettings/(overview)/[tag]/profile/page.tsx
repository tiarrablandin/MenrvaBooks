import Profile from "@/ui/user/settings/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
};

export default async function Page() {
  return (
    <main className="">
      <Profile/>
    </main>
  );
}