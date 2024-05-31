import { Typography } from "@/providers/coreProviders";
import Link from "next/link";
import AnimatedHeader from "./ui/motion/animatedHeader";
import NavbarWithSearch from "./ui/navbar/nav";
import { cookies } from "next/headers";
import ReduxProvider from "@/providers/reduxProvider";
import AdvancedSearchComponent from "./ui/search/advancedSearch";

export default function Home() {
  const tag = cookies().get('tag')?.value as string;
  const role = cookies().get('role')?.value as string;
  const theme = cookies().get('theme')?.value as string;

  const logout = async () => {
    'use server';
    cookies().delete('tag');
    cookies().delete('role');
    cookies().delete('jwt');
  }

  return (
    <div className="flex flex-col h-screen w-full">
      <ReduxProvider>
        <NavbarWithSearch tag={tag} role={role} logout={logout} theme={theme}></NavbarWithSearch>
      </ReduxProvider>
      <main className="flex flex-col h-full w-full items-center justify-center text-nowrap">
        <AnimatedHeader />

        <div className="flex flex-col w-3/5">
          <AdvancedSearchComponent />
          <div className="flex w-3/4 justify-between mx-auto">
            <Link href="/login">
              <Typography>Already a member? Sign In</Typography>
            </Link>
            <Link href="/subscriptions">
              <Typography>If not, create a free account!</Typography>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
