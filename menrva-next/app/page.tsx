import ReduxProvider from "@/providers/reduxProvider";
import { Advent_Pro } from "next/font/google";
import Link from "next/link";
import AnimatedHeader from "../ui/motion/animatedHeader";
import AdvancedSearchComponent from "../ui/search/advancedSearch";


const advent = Advent_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex flex-col h-screen w-full `}>
      <main className="flex flex-col h-full w-full items-center justify-center text-nowrap">
        <>
          <AnimatedHeader />
        </>

        <div className="flex flex-col w-4/5 xl:w-3/5">
          <ReduxProvider>
            <AdvancedSearchComponent />
          </ReduxProvider>
          <div className="flex w-3/4 justify-between mx-auto">
            <Link href="/login">
              <div className="text-[1.1rem] hover:underline">Already a member? Sign In</div>
            </Link>
            <Link href="/subscriptions">
              <div className="text-[1.1rem] hover:underline">If not, create a free account!</div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
