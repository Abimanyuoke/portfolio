"use client";

import React, { forwardRef } from 'react';
import { useCustomScrollbar, ScrollbarVariant } from '../../hooks/useCustomScrollbar';

interface CustomScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: ScrollbarVariant;
    color?: 'orange' | 'blue' | 'green' | 'purple' | 'red';
    autoHide?: boolean;
    maxHeight?: string;
    maxWidth?: string;
    orientation?: 'vertical' | 'horizontal' | 'both';
}

const CustomScrollArea = forwardRef<HTMLDivElement, CustomScrollAreaProps>(
    ({
        children,
        variant = 'default',
        color = 'orange',
        autoHide = false,
        maxHeight,
        maxWidth,
        orientation = 'vertical',
        className = '',
        style = {},
        ...props
    }, ref) => {
        const scrollbarClass = useCustomScrollbar({ variant, color, autoHide });

        const overflowClass = {
            vertical: 'overflow-y-auto overflow-x-hidden',
            horizontal: 'overflow-x-auto overflow-y-hidden',
            both: 'overflow-auto'
        };

        const combinedStyle = {
            ...style,
            ...(maxHeight && { maxHeight }),
            ...(maxWidth && { maxWidth })
        };

        return (
            <div
                ref={ref}
                className={`${scrollbarClass} ${overflowClass[orientation]} ${className}`}
                style={combinedStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

CustomScrollArea.displayName = 'CustomScrollArea';

export default CustomScrollArea;