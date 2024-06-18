'use client';

import { motion } from 'framer-motion';
import { back_pages_data, cover_data, floating_text_data, left_page_data, purple_data, second_page_data, title_data } from './svg_data';

export default function AnimatedLogo() {
    const pathAnimation = {
        hidden: (custom: any) => ({
            pathLength: 0,
            opacity: 0,
            y: custom.initialY || 0,  // For vertical movement
            scale: custom.initialScale || 1, // For scaling effect
        }),
        visible: (custom: any) => ({
            pathLength: 1,
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, delay: custom.delay, ease: "easeInOut" }
        })
    };

    const strokeVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 4, ease: "easeInOut" }
        }
    };

    const fillVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 2, duration: 0.5 } // This starts after the stroke animation completes
        }
    };


    return (
        <svg
            id="svg"
            version="1.1"
            width="400"
            height="572.6618705035971"
            viewBox="0 0 400 572.6618705035971"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Other paths */}
            <motion.path
                id="second_page"
                d={second_page_data}
                fill="#673c4f"
                variants={pathAnimation}
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.2, initialY: 20, initialScale: 0.8 }}
            />
            <motion.path
                id="left_page"
                d={left_page_data}
                fill="#673c4f"
                variants={pathAnimation}
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.4 }}
            />
            <motion.path
                id="floating_text"
                d={floating_text_data}
                fill="#827191"
                variants={pathAnimation}
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.6 }}
            />
            <motion.path
                id="cover"
                d={cover_data}
                fill="#673c4f"
                variants={pathAnimation}
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.8 }}
            />
            <motion.path
                id="purple"
                d={purple_data}
                fill="#673c4f"
                variants={pathAnimation}
                initial="hidden"
                animate="visible"
                custom={{ delay: 1 }}
            />
            {/* Stroke path */}
            <motion.path
                id="title-stroke"
                d={title_data} // Assuming this is the path data for the title
                fill="none"
                stroke="#3c5a65"
                strokeWidth="0.5"
                variants={strokeVariants}
                initial="hidden"
                animate="visible"
            />
            {/* Filled text, initially hidden */}
            <motion.path
                id="title-fill"
                d={title_data} // Same path data, used for the fill
                fill="#3c5a65"
                stroke="none"
                variants={fillVariants}
                initial="hidden"
                animate="visible"
            />
            <motion.path
                id="back_pages"
                d={back_pages_data}
                stroke="none"
                fill="#673c4f"
                fillRule="evenodd"
                variants={pathAnimation}
                initial="hidden"
                animate="visible"
                custom={{ delay: 1.2 }}
            />
        </svg>
    );
}
