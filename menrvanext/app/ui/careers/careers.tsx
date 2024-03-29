import { Accordion, AccordionBody, AccordionHeader, Card, ChevronDownIcon, Typography } from "@/providers";
import React from "react";
import CustomAccordion from "./accordion";

interface CareersProps {}



const careers: React.FC<CareersProps> = ({}) => {

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-10 max-w-2/3">
        <Typography variant="h2" className="pb-6">
          Join our Team!
        </Typography>

        <Card className="w-[90%]">
          <CustomAccordion/>
        </Card>
      </div>
    </div>
  );
};

export default careers;
