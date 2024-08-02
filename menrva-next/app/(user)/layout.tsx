import { Footer } from "@/ui/footer/footer";
import Nav from "@/ui/navbar/nav";
import UserSpeedDial from "@/ui/user/userSpeedDial";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    // TODO 
    // * need to reorganize folder so all routes have tag
    // * then need to rewrite metadata to use tag
    template: '%s | MenrvaBooks',
    default: 'MernvaBooks',
  },
}

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const tag = cookies().get("tag")?.value as string;
  const role = cookies().get("role")?.value as string;
  const theme = cookies().get("theme")?.value as string;

  return (
    <div className="flex flex-col min-h-screen">
      <Nav tag={tag} role={role} theme={theme} />
      <div className="relative z-20">
        <UserSpeedDial tag={tag} />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
