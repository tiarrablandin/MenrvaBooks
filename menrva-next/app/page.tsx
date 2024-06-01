import { cookies } from "next/headers";
import Link from "next/link";
import AnimatedHeader from "./ui/motion/animatedHeader";
import AdvancedSearchComponent from "./ui/search/advancedSearch";
import { Advent_Pro } from "next/font/google";


const advent = Advent_Pro({ subsets: ["latin"] });

export default function Home() {
  const tag = cookies().get('tag')?.value as string;
  const role = cookies().get('role')?.value as string;

  const logout = async () => {
    'use server';
    cookies().delete('tag');
    cookies().delete('role');
    cookies().delete('jwt');
  }

  return (
    <div className={`flex flex-col h-screen w-full `}>
      {/* <NavbarWithSearch tag={tag} role={role} logout={logout}></NavbarWithSearch> */}
      <main className="flex flex-col h-full w-full items-center justify-center text-nowrap">
        <AnimatedHeader />

        <div className="flex flex-col w-3/5">
          <AdvancedSearchComponent />
          <div className="flex w-3/4 justify-between mx-auto">
            <Link href="/login">
              <p className="text-[1.1rem] hover:underline">Already a member? Sign In</p>
            </Link>
            <Link href="/subscriptions">
              <p className="text-[1.1rem] hover:underline">If not, create a free account!</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
