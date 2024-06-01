import { Card, Typography } from "@/providers/coreProviders";
import React from "react";
import CustomAccordion from "./accordion";

interface CareersProps {}

const FAQ: React.FC<CareersProps> = ({}) => {

const accordionHeaders=[
  "What is your site?",
]
const accordionBodies=[
  "Blah, blah, blah.",
]

  return (
      <div className="flex flex-col items-center pt-10 max-w-2/3">
        <p className="text-2xl pb-6">
          Frequently asked questions
        </p>

        <Card className="w-[80%] bg-transparent shadow-none">
          <CustomAccordion id={1} 
          header={accordionHeaders[0]} 
          body={accordionBodies[0]}/>
        </Card>
      </div>
  );
};

export default FAQ;
