import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  PlusIconOutline,
  HomeIconOutline,
  Cog6ToothIconOutline,
  Square3Stack3DIconOutline,
  UserGroupIcon,
  BookOpenOutline,
} from "@/providers/coreProviders";
import Link from "next/link";
import React from "react";

interface UserSpeedDialProps{
  tag: string;
}

const UserSpeedDial: React.FC<UserSpeedDialProps> = ({tag}) => {
  const cn = "text-parchment/70 bg-eggplant dark:bg-rose/70";
  return (
      <div className="fixed bottom-[5%] right-[5%]">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-eggplant dark:bg-rose/70">
              <PlusIconOutline className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="">
            <Link href={tag ? `/userHome/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className={`${cn}`}>
                <HomeIconOutline className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userHome/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className={`${cn}`}>
                <BookOpenOutline className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userHome/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className={`${cn}`}>
                <UserGroupIcon className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userHome/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className={`${cn}`}>
                <Square3Stack3DIconOutline className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userHome/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className={`${cn}`}>
                <Square3Stack3DIconOutline className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userSettings/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className={`${cn}`}>
                <Cog6ToothIconOutline className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
          </SpeedDialContent>
        </SpeedDial>
      </div>
  );
};

export default UserSpeedDial;
