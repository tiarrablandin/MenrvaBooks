import { Button, IconButton, Typography, XMarkIcon } from "@/providers";
import Link from "next/link";

export function Banner() {
  return (
    <section className="w-full mx-auto">
      <div className="mb-4 shadow-sm px-4 py-2 flex items-center justify-center  gap-x-6 text-nowrap">
        {/* <IconButton variant="text">
          <XMarkIcon className="w-4 h-4 stroke-2" />
        </IconButton> */}
        <Typography variant="h6" color="blue-gray" className="text-md">
          COMING SOON! | Forums! Soon there will be a forum community to discuss books with like-minded individuals!
        </Typography>
          <Link href="/news">
            <Typography variant="h6" className="text-eggplant hover:scale-105 underline">
            Learn More
            </Typography>
          </Link>
      </div>
    </section>
  );
}

export default Banner;