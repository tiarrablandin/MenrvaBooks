import InitializeUserCredentials from "@/lib/utils/initializeUserCredentials";
import ReduxProvider from "@/providers/reduxProvider";
import { Footer } from "@/ui/footer/footer";
import Nav from "@/ui/navbar/nav";
import UserSpeedDial from "@/ui/user/userSpeedDial";
import { cookies } from "next/headers";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const tag = cookies().get("tag")?.value as string;
  const role = cookies().get("role")?.value as string;

  const logout = async () => {
    "use server";
    cookies().delete("tag");
    cookies().delete("role");
    cookies().delete("jwt");
  };

  return (
    <>
      <Nav tag={tag} role={role} logout={logout} />
      <div className="">
        <UserSpeedDial tag={tag} />
      </div>
      {children}
      <Footer />
    </>
  );
}
