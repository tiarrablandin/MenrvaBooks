import ReduxProvider from "@/providers/reduxProvider";
import { cookies } from "next/headers";
import Link from "next/link";
import AnimatedHeader from "../ui/motion/animatedHeader";
import AdvancedSearchComponent from "../ui/search/advancedSearch";
import { Typography } from "@/providers/coreProviders";
import { Suspense } from "react";


export default function Home() {
  const theme = cookies().get('theme')?.value as string;
  return (
    <div className={`flex flex-col h-screen w-full `}>
      <main className="flex flex-col h-full w-full items-center justify-center text-nowrap">
        <Suspense fallback={<p>Loading...</p>}>
          <AnimatedHeader />
        </Suspense>

        <div className="flex flex-col w-4/5 xl:w-3/5">
          <ReduxProvider>
            <AdvancedSearchComponent theme={theme} />
          </ReduxProvider>
          <div className="flex w-3/4 justify-between mx-auto">
            <Link href="/login">
              <Typography className="text-[1.1rem] hover:underline font-medium">Already a member? Sign In</Typography>
            </Link>
            <Link href="/subscriptions">
              <Typography className="text-[1.1rem] hover:underline font-medium">If not, create a free account!</Typography>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
