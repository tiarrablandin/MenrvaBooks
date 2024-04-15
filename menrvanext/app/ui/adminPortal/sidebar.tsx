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
    <div>
      {/* component */}
      <div className="h-screen flex">
        {/* container */}
        <aside className="flex flex-col items-center bg-pink-lavender/70 text shadow h-full">
          {/* Side Nav Bar */}
          <div className="h-16 flex justify-center w-full">
            {/* Logo Section */}
              <Image
                className="h-16 w-14"
                src="https://i.imgur.com/RGGXm1T.png"
                width={96}
                height={96}
                alt="logo"
              />
          </div>

          <ul>
            {/* Items Section */}
            <li className="hover:bg-pink-lavender/40">
              <a href="/admin" className="h-16 px-6 flex justify-center items-center w-full">
                <HomeIconOutline />
              </a>
            </li>

            <li className="hover:bg-pink-lavender/40">
              <a href="." className="h-16 px-6 flex justify-center items-center w-full">
                <BookOpenIcon />
              </a>
            </li>

            <li className="hover:bg-pink-lavender/40">
              <a href="." className="h-16 px-6 flex justify-center items-center w-full">
                <UserCircleIcon />
              </a>
            </li>

            <li className="hover:bg-pink-lavender/40">
              <a href="." className="h-16 px-6 flex justify-center items-center w-full">
                <Cog6ToothIconOutline />
              </a>
            </li>

            <li className="hover:bg-pink-lavender/40">
              <a href="." className="h-16 px-6 flex justify-center items-center w-full">
                <BellIconOutline />
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </a>
            </li>
          </ul>

          <div className="mt-auto h-16 flex items-center w-full hover:bg-pink-lavender/40">
            {/* Action Section */}
            <button className="h-16 px-6 flex justify-center items-center w-full">
              <ArrowRightEndOnRectangleIcon className="" />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default sidebar;
