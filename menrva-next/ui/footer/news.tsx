import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@/providers/coreProviders";
import React from "react";

interface NewsProps {}

const news: React.FC<NewsProps> = ({}) => {
  return (
    <div className="">
      <Typography variant="h5" className="flex justify-center text-2xl py-10 max-w-2/3 text-eggplant dark:text-rose/70">Updates & News</Typography>
      <Timeline className="flex justify-center w-11/12 my-6 mx-12">
        <TimelineItem>
          <TimelineConnector className=""/>
          <TimelineHeader className="">
            <TimelineIcon className="bg-eggplant dark:bg-rose/70"/>
            <div className="leading-none w-4/5 font-semibold text-eggplant dark:text-rose/70">
              Timeline Title Here.
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <p
              className="font-normal"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </p>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="">
            <TimelineIcon className="bg-eggplant dark:bg-rose/70"/>
            <div className="leading-none font-semibold text-eggplant dark:text-rose/70">
              Timeline Title Here.
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <p
              className="font-normal"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </p>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="">
            <TimelineIcon className="bg-eggplant dark:bg-rose/70"/>
            <div className="leading-none font-semibold text-eggplant dark:text-rose/70">
              Timeline Title Here.
            </div>
          </TimelineHeader>
          <TimelineBody>
            <p
              className="font-normal"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </p>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default news;
