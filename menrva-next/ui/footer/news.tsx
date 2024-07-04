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
  const timelineHeaders = ["COMING SOON!", "WELCOME to Menrva Books!", ];
  const timelineBody = [
    "Forums! Hanging and chatting with other readers about your favorite titles is right around the corner! Stay tuned!",
    "We are happy you stopped in! Browse, chat, and stay a while! Hope you brought some mead or ale with you!",
  ];

  return (
    <div className="">
      <Typography
        variant="h5"
        className="flex justify-center text-2xl py-10 max-w-2/3 text-eggplant dark:text-rose/70"
      >
        Updates & News
      </Typography>
      <Timeline className="flex justify-center w-11/12 my-6 mx-12">
        {timelineHeaders.map((header, index) => (
          <TimelineItem key={index}>
            <TimelineConnector className="" />
            <TimelineHeader className="">
              <TimelineIcon className="bg-eggplant dark:bg-rose/70" />
              <div className="leading-none w-4/5 font-semibold text-eggplant dark:text-rose/70">
                {header} {/* Display the header text */}
              </div>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              {timelineBody[index]} {/* Display the corresponding body text */}
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default news;
