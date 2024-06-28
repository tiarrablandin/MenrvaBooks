import Security from "@/ui/user/settings/security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
};

export default async function Page() {
  return (
    <main className="">
      <Security />
    </main>
  );
}
