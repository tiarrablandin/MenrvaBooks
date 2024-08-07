'use client';

import {
  ArrowRightEndOnRectangleIcon,
  BellIconOutline,
  BookOpenOutline,
  Cog6ToothIconOutline,
  HistoryEduOutlined,
  HomeIconOutline,
  SparklesIcon,
  UserCircleIcon
} from "@/providers/coreProviders";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className={`h-screen w-14 inline-flex fixed`}>
      {/* container */}
      <aside className="flex flex-col items-center bg-chinese-violet/30 text shadow h-full">
        {/* Side Nav Bar */}
        <Link href="/home">
          <div className="h-16 flex justify-center w-full">
            {/* Logo Section */}
            <Image
              className="h-16 w-14"
              src="https://i.imgur.com/RGGXm1T.png"
              width={96}
              height={96}
              alt="logo"
              priority
            />
          </div>
        </Link>

        <ul className="text-eggplant dark:text-rose/85 w-full h-96 flex justify-between items-center flex-col mt-1">
          {[
            { href: "/admin", icon: HomeIconOutline },
            { href: "/admin/books", icon: BookOpenOutline },
            { href: "/admin/authors", icon: HistoryEduOutlined },
            { href: "/admin/users", icon: UserCircleIcon },
            { href: "/admin/other", icon: SparklesIcon },
            { href: "/admin/settings", icon: Cog6ToothIconOutline },
            // { href: "/admin/notifications", icon: BellIconOutline }
          ].map(({ href, icon: Icon }) => (
            <Link key={href} href={href} className="h-1/4 w-full">
              <li className={`flex justify-center items-center h-full w-full hover:text-parchment/70 ${isActive(href) ? 'bg-eggplant/25 dark:bg-rose/25 text-parchment/70' : 'hover:bg-eggplant/15 dark:hover:bg-rose/15'}`}>
                <Icon className="h-7 w-7 mx-auto" />
              </li>
            </Link>
          ))}
        </ul>

        <div className="mt-auto h-16 flex items-center justify-center w-full hover:bg-eggplant/10 dark:hover:bg-rose/10">
          {/* Action Section */}
          <Link href=".">
            <ArrowRightEndOnRectangleIcon className="h-7 w-7 mx-auto text-eggplant dark:text-rose/70" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
