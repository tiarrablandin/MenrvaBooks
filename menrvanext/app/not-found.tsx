import React from "react";
import Link from "next/link";
import { Typography } from "@/providers";

export default function notFound() {
  return (
    <section>
      <div className="relative min-h-screen w-full bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat">
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <Typography variant="h1" className="text-4xl !leading-snug lg:text-5xl">
              Error 404
            </Typography>
            <Typography variant="h1" className="mt-6 text-4xl !leading-snug lg:text-3xl">
              Sorry, We Misplaced That Page
            </Typography>
            <Typography
              variant="lead"
              className="mt-4 mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl"
            >
              Our digital librarian seems to have misplaced the page you requested. Stay with us,
              and we&apos;ll help you rediscover it. <br /> <br />
              Here, instead, you&apos;ll find some useful links:
            </Typography>
            <div className="flex items-center gap-x-10 ">
              <Link href="/home">
                <Typography variant="lead" className="text-xs font-bold uppercase ">
                  Home
                </Typography>
              </Link>
              <Link href="/contact">
                <Typography variant="lead" className="text-xs font-bold uppercase">
                  Contact Us
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}