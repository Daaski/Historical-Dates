import { Dispatch, SetStateAction } from 'react';

export interface TempDataType {
    id: number,
    title: string
    range: {
        [key: string]: string
    }
}

export interface RangeDateContextTypes {
    selectedRange: TempDataType
    setSelectedRange: Dispatch<SetStateAction<TempDataType>>
}