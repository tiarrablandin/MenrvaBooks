import { Metadata } from "next";
import RootLayout from "@/app/layout";
import AdminPortal from "@/app/ui/adminPortal/adminPortal";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <RootLayout hideNavbar={true}>
      <main className="w-screen min-h-[calc(100vh-295px)]">
        <AdminPortal />
      </main>
    </RootLayout>
  );
}
