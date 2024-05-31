'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeader() {
    return <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-300 to-red-800 inline-block text-transparent bg-clip-text "
    >
        Find Your Favorite Books, Authors, and Series
    </motion.h1>
}