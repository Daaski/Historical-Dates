import { FC, useContext } from 'react';

import { tempArray } from 'app/components/DatesWrapper/tempData';
import { RangeDateContext } from 'app/components/DatesWrapper/DatesWrapper';

import { DotsPaginationProps } from 'app/components/DatesWrapper/components/DatesPagination/types';
import { RangeDateContextTypes } from 'app/components/DatesWrapper/types';

import scss from './DatesPagination.module.scss';

export const DatesPaginationDots: FC<DotsPaginationProps> = ({
    handleDotClick,
}) => {
    const { selectedRange } = useContext<RangeDateContextTypes | null>(
        RangeDateContext
    ) as RangeDateContextTypes;
    return (
        <div className={scss.dots_wrapper}>
            {tempArray.map((el, index) => (
                <div
                    onClick={() => handleDotClick(el)}
                    data-isactive={selectedRange.id === el.id}
                    key={index}
                    className={scss.dot}
                />
            ))}
        </div>
    );
};
