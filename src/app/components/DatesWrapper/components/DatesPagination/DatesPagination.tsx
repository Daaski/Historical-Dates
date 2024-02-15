import { FC, useContext } from 'react';

import ArrowSvg from 'app/components/DatesWrapper/svg/arrow.svg';

import { DatesPaginationDots } from 'app/components/DatesWrapper/components/DatesPagination/DatesPaginationDots';
import { RangeDateContext } from 'app/components/DatesWrapper/DatesWrapper';
import { tempArray } from 'app/components/DatesWrapper/tempData';

import { DatesPaginationProps } from 'app/components/DatesWrapper/components/DatesPagination/types';
import { RangeDateContextTypes } from 'app/components/DatesWrapper/types';

import scss from './DatesPagination.module.scss';

export const DatesPagination: FC<DatesPaginationProps> = ({
    handleArrowClick,
}) => {
    const { selectedRange, setSelectedRange } =
        useContext<RangeDateContextTypes | null>(
            RangeDateContext
        ) as RangeDateContextTypes;

    const handleClick = (direction: 'back' | 'forward') => {
        if (direction === 'back') {
            handleArrowClick(
                tempArray.find((el) => el.id === selectedRange.id - 1)!
            );
        } else {
            handleArrowClick(
                tempArray.find((el) => el.id === selectedRange.id + 1)!
            );
        }
    };

    return (
        <div className={scss.pagination_layout}>
            <div className={scss.dates_wrapper}>
                <p>
                    0{selectedRange.id}/0{tempArray.length}
                </p>
                <div className={scss.arrows_wrapper}>
                    <div
                        onClick={() => handleClick('back')}
                        data-isdisabled={selectedRange.id === 1}
                        className={scss.pagination_arrow_left}
                    >
                        <ArrowSvg />
                    </div>
                    <div
                        onClick={() => handleClick('forward')}
                        data-isdisabled={selectedRange.id === tempArray.length}
                        className={scss.pagination_arrow_right}
                    >
                        <ArrowSvg />
                    </div>
                </div>
            </div>
            <DatesPaginationDots
                handleDotClick={handleArrowClick}
            />
        </div>
    );
};
