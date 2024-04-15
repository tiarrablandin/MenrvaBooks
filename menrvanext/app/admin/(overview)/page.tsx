import { Metadata } from "next";
import RootLayout from "@/app/layout";
import AdminPortal from "@/app/ui/adminPortal/adminPortal";

export const metadata: Metadata = {
  title: "MenrvaBooks",
};

export default async function Page() {
  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <RootLayout hideNavbar={true}>
        <AdminPortal />
      </RootLayout>
    </main>
  );
}
