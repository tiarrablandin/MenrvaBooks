import {
  ArrowRightEndOnRectangleIcon,
  BellIconOutline,
  BookOpenIcon,
  Cog6ToothIconOutline,
  HomeIconOutline,
  UserCircleIcon
} from "@/providers";
import Image from "next/image";
import Link from "next/link";

const sidebar = () => {
  return (
    // <div className="h-[calc(100vh-240px)] w-16 fixed inline-block ">
    <div className="h-screen w-16 fixed inline-block ">
      {/* container */}
      <aside className="flex flex-col items-center bg-pink-lavender/70 text shadow h-full">
        {/* Side Nav Bar */}
        <Link href="/home">
          <div className="h-16 flex justify-center w-full mt-1">
            {/* Logo Section */}
            <Image
              className="h-16 w-14"
              src="https://i.imgur.com/RGGXm1T.png"
              width={96}
              height={96}
              alt="logo"
            />
          </div>
        </Link>

        <ul className="text-eggplant w-full h-72 flex justify-between items-center flex-col mt-1">
          {/* Items Section */}
          <li className="hover:bg-pink-lavender/40 h-1/4 flex justify-center items-center w-full">
            <Link href="/admin">
              <HomeIconOutline className="h-7 w-7 mx-auto" />
            </Link>
          </li>

          <li className="hover:bg-pink-lavender/40 h-1/4 flex justify-center items-center w-full">
            <Link href=".">
              <BookOpenIcon className="h-7 w-7 mx-auto" />
            </Link>
          </li>

          <li className="hover:bg-pink-lavender/40 h-1/4 flex justify-center items-center w-full">
            <Link href="." >
              <UserCircleIcon className="h-7 w-7 mx-auto" />
            </Link>
          </li>

          <li className="hover:bg-pink-lavender/40 h-1/4 flex justify-center items-center w-full">
            <Link href="." >
              <Cog6ToothIconOutline className="h-7 w-7 mx-auto" />
            </Link>
          </li>

          <li className="hover:bg-pink-lavender/40 h-1/4 flex justify-center items-center w-full">
            <Link href="." >
              <BellIconOutline className="h-7 w-7 mx-auto" />
            </Link>
          </li>
        </ul>

        <div className="mt-auto h-16 flex items-center justify-center w-full hover:bg-pink-lavender/40">
          {/* Action Section */}
          <Link href=".">
            <ArrowRightEndOnRectangleIcon className="h-7 w-7 mx-auto text-eggplant" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default sidebar;
