import ContactForm from "@/app/ui/contact/contactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <ContactForm/>
    </main>
  );
}
