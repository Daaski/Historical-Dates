import { useContext, useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import { DatesSwiperSlide } from 'app/components/DatesWrapper/components/DatesSwiper/DatesSwiperSlide';
import ArrowSvg from 'app/components/DatesWrapper/svg/arrow.svg';

import { useResizeWidth } from 'hooks/useResizeWidth';

import { layoutVisible } from 'app/components/DatesWrapper/components/DatesSwiper/motionConfig';
import { RangeDateContext } from 'app/components/DatesWrapper/DatesWrapper';

import { RangeDateContextTypes } from 'app/components/DatesWrapper/types';

import 'swiper/scss';
import scss from './DatesSwaper.module.scss';

export const DatesSwiper = () => {
    const { tabletBreak } = useResizeWidth();
    const { selectedRange } = useContext<RangeDateContextTypes | null>(
        RangeDateContext
    ) as RangeDateContextTypes;

    const swiperRef = useRef<SwiperClass>();

    return (
        <motion.div
            key={selectedRange.title}
            variants={tabletBreak ? layoutVisible : undefined}
            initial="initial"
            animate="animate"
            className={scss.swiper_layout}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.2,
                    },
                }}
                className={scss.swiper_title}
            >
                <h2>{selectedRange.title}</h2>
            </motion.div>
            <div className={scss.swiper}>
                <Swiper
                    breakpoints={{
                        300: {
                            slidesPerView: 'auto',
                            spaceBetween: 40,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    spaceBetween={20}
                    direction="horizontal"
                    onInit={(swiper) => (swiperRef.current = swiper)}
                >
                    {Object.entries(selectedRange.range).map((el, index) => (
                        <SwiperSlide key={el[0]}>
                            <DatesSwiperSlide
                                year={el[0]}
                                description={el[1]}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    onClick={() => swiperRef.current?.slideNext()}
                    className={scss.swiper_arrow_right}
                >
                    <ArrowSvg />
                </div>
            </div>
        </motion.div>
    );
};
