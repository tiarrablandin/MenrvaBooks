import AdminHome from "@/ui/adminPortal/home/adminHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-[calc(100vh-295px)] w-[calc(100%-4rem)] mr-1 ml-auto">
    <AdminHome/>
    </main>
  );
}
