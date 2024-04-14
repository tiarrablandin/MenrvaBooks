"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ChevronDownIcon,
  Typography,
} from "@/providers";
import React, { useState } from "react";

interface AccordionProps {
  id: number;
  header: string;
  body: string;
}
interface IconProps {
  id: number;
  open: number;
}

const CustomAccordion: React.FC<AccordionProps> = ({ id, header, body }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
        <Accordion key={id} open={open === id + 1} onClick={() => handleOpen(id + 1)}>
          <AccordionHeader className="text-left text-eggplant">{header}</AccordionHeader>
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
