import { Footer } from "@/ui/footer/footer";
import Nav from "@/ui/navbar/nav";
import UserSpeedDial from "@/ui/user/userSpeedDial";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    template: '%s | MenrvaBooks',
    default: 'MernvaBooks',
  },
}

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const tag = cookies().get("tag")?.value as string;
  const role = cookies().get("role")?.value as string;
  const theme = cookies().get("theme")?.value as string;

  return (
    <>
      <Nav tag={tag} role={role} theme={theme} />
      <div className="relative z-20">
        <UserSpeedDial tag={tag} />
      </div>
      {children}
      <Footer />
    </>
  );
}
