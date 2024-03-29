"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ChevronDownIcon,
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

export const Icon: React.FC<IconProps> = ({ id, open }) => {
  return (
    <ChevronDownIcon
      className={`${
        id === open ? "rotate-180" : ""
      } h-6 w-6 transition-transform mr-3`}
    />
  );
};

const CustomAccordion: React.FC<AccordionProps> = ({id, header, body}) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="px-8">
        <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(id)}>
            {header}
          </AccordionHeader>
          <AccordionBody>
            {body}
          </AccordionBody>
        </Accordion>
    </div>
  );
};

export default CustomAccordion;
