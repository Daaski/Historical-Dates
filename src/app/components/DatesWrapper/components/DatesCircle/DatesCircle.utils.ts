import { MutableRefObject, RefObject } from 'react';
import {  TempDataType } from 'app/components/DatesWrapper/types';

export const getEquidistantPosition = (
    element: RefObject<HTMLDivElement>,
    elements: MutableRefObject<HTMLDivElement[]>
) => {
    if (element.current) {
        const elemRect = element.current.getBoundingClientRect();
        const radius = elemRect.width / 2;
        const diameter = elemRect.width;

        elements.current.forEach((dot, index) => {
            const dotWidth = dot.getBoundingClientRect().width;
            const degreeAngle = (Math.PI * 2 * index) / elements.current.length;
            const x =
                ((radius - dotWidth / 2 + radius * Math.cos(degreeAngle)) /
                    diameter) *
                100;
            const y =
                ((radius - dotWidth / 2 + radius * Math.sin(degreeAngle)) /
                    diameter) *
                100;

            dot.style.top = y + '%';
            dot.style.left = x + '%';
            dot.style.opacity = '1';
        });
    }
};

export const rotateToDefault = (
    value: TempDataType,
    selectedRange: TempDataType,
    circleWrapperRef: MutableRefObject<HTMLDivElement | null>,
    dots: MutableRefObject<HTMLDivElement[]>
) => {
    const previousAngle = +circleWrapperRef.current!.style.rotate.replace(
        /[^0-9]/g,
        ''
    );

    const angleBetween = 360 / dots.current.length;
    const distanceBetween = selectedRange.id - value.id;

    circleWrapperRef.current!.style.rotate = `${angleBetween * distanceBetween + previousAngle}deg`;

    dots.current.forEach((dot) => {
        dot.style.rotate = `${-(angleBetween * distanceBetween + previousAngle)}deg`;
    });
};
