import { motion } from "framer-motion";
import type {ReactNode} from "react";

interface MotionSectionProps {
    children: ReactNode;
    className?: string;
}

export const MotionSection = ({
                                  children,
                                  className,
                              }: MotionSectionProps) => {
    return (
        <motion.section
            className={className}
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.section>
    );
};