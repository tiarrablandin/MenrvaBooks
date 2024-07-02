import { Typography } from "@/providers/coreProviders";
import ReduxProvider from "@/providers/reduxProvider";
import AnimatedLogo from "@/ui/motion/animatedLogo";
import { cookies } from "next/headers";
import Link from "next/link";
import AnimatedHeader from "../ui/motion/animatedHeader";
import AdvancedSearchComponent from "../ui/search/advancedSearch";

export default function Home() {
  return (
    <div className={`flex flex-col h-screen w-full `}>
      <main className="flex flex-col h-full w-full items-center justify-center text-nowrap">
        <div className="grid grid-cols-[auto,1fr] w-1/2 items-center mx-auto py-4 gap-2">
          <div className="col-span-1 flex justify-center h-48 ">
            <Link href="/home" className="">
              <AnimatedLogo />
            </Link>
          </div>
          <div className="flex flex-col justify-around mt-auto">
            <AnimatedHeader />
            <Typography variant="h6" className="-mt-4 ml-2 text-lg text-onyx dark:text-parchment">Start by searching for a book, author or genre.</Typography>
          </div>
        </div>


        <div className="flex flex-col w-4/5 xl:w-3/5">
          <ReduxProvider>
            <AdvancedSearchComponent />
          </ReduxProvider>
          <div className="flex w-3/4 justify-between mx-auto">
            <Typography className="text-[1.1rem] font-medium">
              Already a member?
              <Link href="/login" className="ml-2 underline hover:scale-105">
                Sign In
              </Link>
            </Typography>
            <Typography className="text-[1.1rem] font-medium">
              If not,
              <Link href="/subscriptions" className="ml-2 underline hover:scale-105">create a free account.</Link>
            </Typography>
          </div>
            <Typography className="text-[1.1rem] font-medium flex justify-center my-4">
              Not sure what to search for? Check out our 
              <Link href="/home" className="ml-2 underline hover:scale-105">home page.</Link>
            </Typography>
        </div>
      </main>
    </div>
  );
}
