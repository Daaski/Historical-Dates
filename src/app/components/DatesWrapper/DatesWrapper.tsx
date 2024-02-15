'use client';

import { createContext, useState } from 'react';

import { DatesCircle } from 'app/components/DatesWrapper/components/DatesCircle';
import { DatesSwiper } from 'app/components/DatesWrapper/components/DatesSwiper';
import { DatesPagination } from 'app/components/DatesWrapper/components/DatesPagination';

import { useResizeWidth } from 'hooks/useResizeWidth';

import { tempArray } from 'app/components/DatesWrapper/tempData';

import { RangeDateContextTypes } from 'app/components/DatesWrapper/types';


export const RangeDateContext = createContext<RangeDateContextTypes | null>(
    null
);

export const DatesWrapper = () => {
    const [selectedRange, setSelectedRange] = useState<
        RangeDateContextTypes['selectedRange']
    >(tempArray.at(-1)!);
    const { tabletBreak } = useResizeWidth();

    return (
        <RangeDateContext.Provider value={{ selectedRange, setSelectedRange }}>
            <DatesCircle />
            <DatesSwiper />
            {tabletBreak && <DatesPagination handleArrowClick={(value) => setSelectedRange(value)} />}
        </RangeDateContext.Provider>
    );
};
