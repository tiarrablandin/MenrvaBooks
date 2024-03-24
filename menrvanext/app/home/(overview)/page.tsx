import HomeComponent from "@/app/ui/home/home";
import LoginForm from "@/app/ui/userPortal/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <LoginForm />
      <HomeComponent/>
    </main>
  );
}
