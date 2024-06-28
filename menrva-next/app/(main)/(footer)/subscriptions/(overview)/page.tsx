import UserSubscriptions from "@/ui/subscriptions/userSubscriptions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Subscriptions",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <UserSubscriptions/>
    </main>
  );
}