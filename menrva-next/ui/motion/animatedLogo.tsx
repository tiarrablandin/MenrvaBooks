'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

export default function AnimatedLogo() {

  return (
    // <motion.svg></motion.svg>
    <Image alt="logo" src="/public/edited_logo.svg" width="150" height="250" />
  )
}
