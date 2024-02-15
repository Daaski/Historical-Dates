'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { motion } from 'framer-motion';

import { DatesRange } from 'app/components/DatesWrapper/components/DatesRange';
import { DatesPagination } from 'app/components/DatesWrapper/components/DatesPagination';

import { useResizeWidth } from 'hooks/useResizeWidth';
import {
    getEquidistantPosition,
    rotateToDefault,
} from 'app/components/DatesWrapper/components/DatesCircle/DatesCircle.utils';
import { tempArray } from 'app/components/DatesWrapper/tempData';
import { RangeDateContext } from 'app/components/DatesWrapper/DatesWrapper';

import {
    RangeDateContextTypes,
    TempDataType,
} from 'app/components/DatesWrapper/types';

import scss from './DatesCircle.module.scss';

export const DatesCircle = () => {
    const { selectedRange, setSelectedRange } =
        useContext<RangeDateContextTypes | null>(
            RangeDateContext
        ) as RangeDateContextTypes;

    const [hoverSelected, setHoverSelected] = useState<TempDataType | null>(
        null
    );

    const { tabletBreak } = useResizeWidth();

    const circleWrapperRef = useRef<HTMLDivElement>(null);

    const dots = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        getEquidistantPosition(circleWrapperRef, dots);
    }, []);

    const handleDotClick = (value: TempDataType) => {
        setSelectedRange(value);

        rotateToDefault(value, selectedRange, circleWrapperRef, dots);
    };

    console.log(tabletBreak)

    return (
        <div className={scss.dates_circle_layout}>
            {
                createPortal(
                    <hr
                        style={{
                            height:
                                document.documentElement.scrollHeight + 'px',
                        }}
                    />,
                    document.body
                )}
            <hr />
            <DatesRange />
            <div ref={circleWrapperRef} className={scss.circle_wrapper}>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 530 530"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.2"
                        cx="265"
                        cy="265"
                        r="265"
                        stroke="#42567A"
                    />
                </svg>
                {tempArray.map((el, index) => {
                    const isSelectedAny =
                        selectedRange.id === el.id ||
                        hoverSelected?.id === el.id;
                    const isSelected = selectedRange.id === el.id;

                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: index * 0.1,
                                },
                            }}
                            onHoverStart={() => setHoverSelected(el)}
                            onHoverEnd={() => setHoverSelected(null)}
                            onClick={() => handleDotClick(el)}
                            data-isselected={selectedRange === el}
                            className={scss.circle_dot}
                            ref={(element) =>
                                (dots.current[index] =
                                    element as HTMLDivElement)
                            }
                            key={index}
                        >
                            <motion.div className={scss.number_bg} />
                            {isSelectedAny && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {el.id}
                                </motion.p>
                            )}

                            {isSelected && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { delay: 1.2 },
                                    }}
                                    className={scss.el_title}
                                >
                                    {el.title}
                                </motion.span>
                            )}
                        </motion.div>
                    );
                })}
            </div>
            {!tabletBreak && (
                <DatesPagination
                    handleArrowClick={(value) => handleDotClick(value)}
                />
            )}
        </div>
    );
};
