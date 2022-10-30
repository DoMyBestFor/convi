import React, { HTMLAttributes } from 'react';
export interface ConviTabElementProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    fixed?: boolean;
    children: React.ReactElement;
    frontIcon?: React.ReactElement;
}
export declare const ConviTabElement: React.FC<ConviTabElementProps>;
export default ConviTabElement;
