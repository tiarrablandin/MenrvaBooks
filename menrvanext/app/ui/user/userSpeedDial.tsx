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
  HandThumbUpIcon,
} from "@/providers";
import Link from "next/link";
import React from "react";

interface UserSpeedDialProps{
  tag: string;
}

const UserSpeedDial: React.FC<UserSpeedDialProps> = ({tag}) => {
  return (
      <div className="fixed bottom-[5%] right-[5%]">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIconOutline className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <Link href={tag ? `/userSettings/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className="bg-eggplant">
                <Cog6ToothIconOutline className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userHome/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className="bg-eggplant">
                <UserGroupIcon className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userHome/${tag}` : `/userHome/${tag}`}>
              <SpeedDialAction className="bg-eggplant">
                <HandThumbUpIcon className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
            <Link href={tag ? `/userHome/${tag}/userComments` : `/userHome/${tag}`}>
              <SpeedDialAction className="bg-eggplant">
                <Square3Stack3DIconOutline className="h-5 w-5" />
              </SpeedDialAction>
            </Link>
          </SpeedDialContent>
        </SpeedDial>
      </div>
  );
};

export default UserSpeedDial;
