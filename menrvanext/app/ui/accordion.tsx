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
        <Accordion open={open === id} icon={<Icon id={id} open={open} />} className=" rounded-lg bg-transparent">
          <AccordionHeader onClick={() => handleOpen(id)} className="rounded-lg !border border-eggplant dark:border-old-lace bg-pink-lavender/80 dark:bg-chinese-violet">
            <Typography as="h3" variant="h5" className="mx-4">
            {header}
            </Typography>
          </AccordionHeader>
          <AccordionBody className="rounded-lg !border border-eggplant dark:border-old-lace bg-pink-lavender/80 dark:bg-chinese-violet text-eggplant px-4">
            {body}
          </AccordionBody>
        </Accordion>
  );
};

export default CustomAccordion;
