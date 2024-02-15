import { Variants } from 'framer-motion';

export const layoutVisible: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            bounce: 0,
            delay: 1.2,
        },
    }
}