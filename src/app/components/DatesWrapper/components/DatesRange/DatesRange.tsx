import { useContext } from 'react';

import { Digit } from 'app/components/DatesWrapper/components/DatesRange/Digit';

import { RangeDateContext } from 'app/components/DatesWrapper/DatesWrapper';

import { RangeDateContextTypes } from 'app/components/DatesWrapper/types';

import scss from './DatesRange.module.scss';


export const DatesRange = () => {
    const { selectedRange } = useContext<RangeDateContextTypes | null>(
        RangeDateContext
    ) as RangeDateContextTypes;

    const rangeStart = Object.keys(selectedRange.range)[0];
    const rangeEnd = Object.keys(selectedRange.range).at(-1)!;

    return (
        <div className={scss.range_wrapper}>
            <div className={scss.range_start}>
                <Digit place={1000} value={+rangeStart}/>
                <Digit place={100} value={+rangeStart}/>
                <Digit place={10} value={+rangeStart}/>
                <Digit place={1} value={+rangeStart}/>
            </div>
            <div className={scss.range_end}>
                <Digit place={1000} value={+rangeEnd} />
                <Digit place={100} value={+rangeEnd} />
                <Digit place={10} value={+rangeEnd} />
                <Digit place={1} value={+rangeEnd} />
            </div>
        </div>
    );
};
