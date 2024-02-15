import {motion, MotionValue, useTransform } from 'framer-motion';

import scss from './DatesRange.module.scss'

export function Number({ mv, number }: { mv: MotionValue; number: number }) {
    let y = useTransform(mv, (latest) => {
        let placeValue = latest % 10;
        let offset = (10 + number - placeValue) % 10;

        let memo = offset * 200;

        if (offset > 5) {
            memo -= 10 * 200;
        }

        return memo;
    });

    return (
        <motion.span
            style={{ y }}
            className={scss.number}
        >
            {number}
        </motion.span>
    );
}