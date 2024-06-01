"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography
} from "@/providers/coreProviders";
import React, { useState } from "react";

interface AccordionProps {
  id: number;
  header: string;
  body: string;
}

const CustomAccordion: React.FC<AccordionProps> = ({ id, header, body }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
        <Accordion key={id} open={open === id + 1} onClick={() => handleOpen(id + 1)}>
          <AccordionHeader className="font-normal text-left text-eggplant">
          <p className="text-xl font-semibold">
            {header}
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="font-normal">
              {body}
            </p>
          </AccordionBody>
        </Accordion>
    </div>
  );
};

export default CustomAccordion;
