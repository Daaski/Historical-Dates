import { FC } from 'react';

import { motion } from 'framer-motion';

import { DatesSwiperSlideProps } from 'app/components/DatesWrapper/components/DatesSwiper/types';

import scss from './DatesSwaper.module.scss';

export const DatesSwiperSlide: FC<DatesSwiperSlideProps> = ({
    year,
    description,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1.2,
                },
            }}
            className={scss.swiper_card}
        >
            <h4 className={scss.swiper_card_title}>{year}</h4>
            <p className={scss.swiper_card_description}>{description}</p>
        </motion.div>
    );
};
