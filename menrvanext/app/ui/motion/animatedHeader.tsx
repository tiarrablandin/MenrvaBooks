'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeader() {
    return <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4 text-eggplant dark:text-pink-lavender"
    >
        Find Your Favorite Books, Authors, and Series
    </motion.h1>
}