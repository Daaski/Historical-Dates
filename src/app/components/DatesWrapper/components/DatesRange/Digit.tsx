import { useEffect } from 'react';
import { useSpring } from 'framer-motion';

import {Number} from 'app/components/DatesWrapper/components/DatesRange/Number';

import scss from './DatesRange.module.scss'
import { useResizeWidth } from 'hooks/useResizeWidth';

export function Digit({ place, value }: { place: number; value: number }) {
    const {tabletBreak} = useResizeWidth()
    let valueRoundedToPlace = Math.floor(value / place);
    let animatedValue = useSpring(valueRoundedToPlace, {
        duration: 1500,
        damping: tabletBreak ? 15 : 10,
        stiffness: tabletBreak ? 60 : 100,
    });

    useEffect(() => {
        animatedValue.set(valueRoundedToPlace);
    }, [animatedValue, valueRoundedToPlace]);

    return (
        <div className={scss.digit}>
            {[...Array(10).keys()].map((i) => (
                <Number key={i} mv={animatedValue} number={i} />
            ))}
        </div>
    );
}