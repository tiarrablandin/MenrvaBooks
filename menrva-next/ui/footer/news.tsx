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
    <div className="flex justify-center">
      <Timeline className="w-4/5 my-20">
        <TimelineItem>
          <TimelineConnector className=""/>
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-eggplant"/>
            <div className="leading-none w-4/5">
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
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-eggplant"/>
            <div className="leading-none">
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
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-eggplant"/>
            <div className="leading-none">
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
