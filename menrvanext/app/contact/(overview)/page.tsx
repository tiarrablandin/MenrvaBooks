import ContactForm from "@/app/ui/contactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <ContactForm/>
    </main>
  );
}
