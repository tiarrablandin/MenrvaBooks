import { fetchBooks } from "@/app/services/apiService";
import BookSlider from "@/app/ui/bookSlider";
import UserComponent from "@/app/ui/userPortal/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "| User",
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <UserComponent />
    </main>
  );
}