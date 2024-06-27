import Contact from "@/ui/footer/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <Contact/>
    </main>
  );
}
