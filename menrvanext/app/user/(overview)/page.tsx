import { fetchBooks } from "@/app/services/apiService";
import BookSlider from "@/app/ui/book/bookSlider";
import UserComponent from "@/app/ui/userHome/userHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks | User",
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <UserComponent />
    </main>
  );
}
