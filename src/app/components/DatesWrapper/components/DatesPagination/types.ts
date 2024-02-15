import { TempDataType } from 'app/components/DatesWrapper/types';


export interface DatesPaginationProps {
    handleArrowClick: (value: TempDataType) => void
}

export interface DotsPaginationProps {
    handleDotClick: DatesPaginationProps['handleArrowClick']
}