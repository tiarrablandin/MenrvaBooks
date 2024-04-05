import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  eggplant,
} from "@/providers";
import React from "react";

interface NewsProps {}

const news: React.FC<NewsProps> = ({}) => {
  return (
    <div className="flex justify-center">
      <Timeline className="w-4/5 my-20">
        <TimelineItem>
          <TimelineConnector className=""/>
          <TimelineHeader className="h-3 text-eggplant">
            <TimelineIcon className="bg-eggplant"/>
            <Typography variant="h6" className="leading-none w-4/5">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              className="font-normal text-gray-600"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-eggplant"/>
            <Typography variant="h6" className="leading-none text-eggplant">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              className="font-normal text-gray-600"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-eggplant"/>
            <Typography variant="h6" className="leading-none text-eggplant">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              variant="small"
              className="font-normal text-gray-600"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default news;
