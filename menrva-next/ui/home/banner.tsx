import { Typography } from "@/providers/coreProviders";
import Link from "next/link";

export function Banner() {
  return (
    <section className="w-full mx-auto">
      <div className="mb-4 shadow-sm px-4 py-2 flex items-center justify-center  gap-x-6 text-nowrap">
        {/* <IconButton variant="text">
          <XMarkIcon className="w-4 h-4 stroke-2" />
        </IconButton> */}
        <p className="text-md">
          COMING SOON! | Forums! Soon there will be a forum community to discuss books with like-minded individuals!
        </p>
          <Link href="/news">
            <div className="text-eggplant dark:text-old-lace hover:scale-105 underline">
            Learn More
            </div>
          </Link>
      </div>
    </section>
  );
}

export default Banner;