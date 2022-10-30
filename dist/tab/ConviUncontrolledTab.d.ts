import React from 'react';
import { ConviTabElementProps } from './ConviTabElement';
export interface ConviUncontrolledTabProps {
    defaultIndex: number;
    forceRender?: boolean;
    children: React.ReactElement<ConviTabElementProps> | React.ReactElement<ConviTabElementProps>[];
}
export declare const ConviUncontrolledTab: React.FC<ConviUncontrolledTabProps>;
export default ConviUncontrolledTab;
