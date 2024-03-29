"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ChevronDownIcon,
} from "@/providers";
import React, { useState } from "react";

interface AccordionProps {}
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

const CustomAccordion: React.FC<AccordionProps> = ({}) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="px-8">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Sales & Marketing
          </AccordionHeader>
          <AccordionBody>
            There are currently no positions available.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>IT</AccordionHeader>
          <AccordionBody>
          There are currently no positions available.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Operations
          </AccordionHeader>
          <AccordionBody>
          There are currently no positions available.
          </AccordionBody>
        </Accordion>
    </div>
  );
};

export default CustomAccordion;
