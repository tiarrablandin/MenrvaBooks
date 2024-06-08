import Link from "next/link";

export function Banner() {
  return (
    <section className="w-full lg:w-full mx-auto">
      <div className="mb-4 gap-4 shadow-sm p-1 flex items-center justify-center leading-tight">
        {/* <IconButton variant="text">
          <XMarkIcon className="w-4 h-4 stroke-2" />
        </IconButton> */}
        <p className="text-md line-clamp-2 text-center">
          COMING SOON! | Forums! Soon there will be a forum community to discuss books with like-minded individuals!
        </p>
        <Link href="/news">
          <p className="w-min text-eggplant dark:text-rose hover:scale-105 underline text-nowrap text-sm">
            Learn More
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Banner;