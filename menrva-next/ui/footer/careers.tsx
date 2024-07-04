import {
  Card,
  Typography
} from "@/providers/coreProviders";
import React from "react";
import CustomAccordion from "./accordion";

interface CareersProps {}

const careers: React.FC<CareersProps> = ({}) => {

const accordionHeaders = [
  "Sales & Marketing - Laid back but driven, we are the magic that connects readers and authors to Menrva Books!",
  "IT - The builders, we are the team that makes all of the awesome features on Menrva possible!",
  "Operations - We are in the business of keeping Menrva a working reality that delivers fantastic worlds to out readers and authors!"
];

const accordionBodies = [
  "There are currently no open positions."
];

  return (
    <div>
      <div className="flex flex-col items-center pt-10 max-w-2/3">
        <div className="pb-6 text-2xl text-eggplant dark:text-rose/70">
          Join our Team!
        </div>

        <Card className="w-[80%] bg-transparent shadow-none">
          <CustomAccordion id={1} header={accordionHeaders[0]} body={accordionBodies[0]}/>
          <CustomAccordion id={2} header={accordionHeaders[1]} body={accordionBodies[0]}/>
          <CustomAccordion id={3} header={accordionHeaders[2]} body={accordionBodies[0]}/>
        </Card>
      </div>
    </div>
  );
};

export default careers;
