import { Accordion, AccordionBody, AccordionHeader, Card, ChevronDownIcon, Typography } from "@/providers";
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
    <div>
      <div className="flex flex-col items-center min-h-screen pt-10 max-w-2/3">
        <Typography variant="h3" className="pb-6">
          Questions? We might have answered them already!
        </Typography>

        <Card className="w-[90%]">
          <CustomAccordion id={1} 
          header={accordionHeaders[0]} 
          body={accordionBodies[0]}/>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
