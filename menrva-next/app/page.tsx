import { Typography } from "@/providers/coreProviders";
import ReduxProvider from "@/providers/reduxProvider";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import AnimatedHeader from "../ui/motion/animatedHeader";
import AdvancedSearchComponent from "../ui/search/advancedSearch";
import AnimatedLogo from "@/ui/motion/animatedLogo";

export default function Home() {
  const theme = cookies().get("theme")?.value as string;
  return (
    <div className={`flex flex-col h-screen w-full `}>
      <main className="flex flex-col h-full w-full items-center justify-center text-nowrap">
        <Link href="/home" className="">
          <AnimatedLogo />
        </Link>

        <AnimatedHeader />

        <div className="flex flex-col w-4/5 xl:w-3/5">
          <ReduxProvider>
            <AdvancedSearchComponent theme={theme} />
          </ReduxProvider>
          <div className="flex w-3/4 justify-between mx-auto">
            <Typography className="text-[1.1rem] font-medium">
              Already a member?
              <Link href="/login" className="ml-2 hover:underline">
                Sign In
              </Link>
            </Typography>
            <Typography className="text-[1.1rem] font-medium">
              If not,
              <Link href="/subscriptions" className="ml-2 hover:underline">create a free account!</Link>
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
