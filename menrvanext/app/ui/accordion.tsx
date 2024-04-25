"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography
} from "@/providers";
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
          <Typography variant="h2" className="text-xl font-semibold">
            {header}
            </Typography>
          </AccordionHeader>
          <AccordionBody>
            <Typography className="font-normal">
              {body}
            </Typography>
          </AccordionBody>
        </Accordion>
    </div>
  );
};

export default CustomAccordion;
