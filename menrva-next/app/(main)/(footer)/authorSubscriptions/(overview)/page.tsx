import AuthorSubscriptions from "@/ui/subscriptions/authorSubscriptions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Author Subscriptions",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <AuthorSubscriptions/>
    </main>
  );
}