import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    className?: string;
    fullWidth?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = '',
    fullWidth = true
}) => {
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : (direction === 'up' ? 30 : direction === 'down' ? -30 : 0),
            x: shouldReduceMotion ? 0 : (direction === 'left' ? 30 : direction === 'right' ? -30 : 0),
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: shouldReduceMotion ? 0.3 : duration,
                delay: shouldReduceMotion ? 0 : delay,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
