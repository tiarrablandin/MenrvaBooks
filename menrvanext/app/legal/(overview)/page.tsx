import Privacy from "@/app/ui/legal/privacy";
import Terms from "@/app/ui/legal/terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="">
      <Privacy/>
      <Terms/>
    </main>
  );
}