import UserComponent from "@/app/ui/userHome/userHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks | User",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <UserComponent />
    </main>
  );
}
