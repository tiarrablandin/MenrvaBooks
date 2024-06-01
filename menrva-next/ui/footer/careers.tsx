import {
  Card,
  Typography
} from "@/providers/coreProviders";
import React from "react";
import CustomAccordion from "./accordion";

interface CareersProps {}

const careers: React.FC<CareersProps> = ({}) => {

const accordionHeaders = [
  "Sales & Marketing",
  "IT",
  "Operations"
];

const accordionBodies = [
  "There are currently no open positions."
];

  return (
    <div>
      <div className="flex flex-col items-center pt-10 max-w-2/3">
        <p className="pb-6 text-2xl">
          Join our Team!
        </p>

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
