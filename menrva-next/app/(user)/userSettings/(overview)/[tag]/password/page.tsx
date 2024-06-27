import Password from "@/ui/user/settings/password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password",
};

export default async function Page() {
  return (
    <main className="">
      <Password/>
    </main>
  );
}