import React from 'react';
import { ConviTabElementProps } from './ConviTabElement';
export interface ConviTabProps {
    selected: number;
    ableChangeTitle?: boolean;
    forceRender?: boolean;
    draggableTab?: boolean;
    children: React.ReactElement<ConviTabElementProps>[];
    onClose: (index: number) => void;
    onTabPositionChange: (currentTabs: React.ReactElement<ConviTabElementProps>[]) => void;
    onSelected: (index: number) => void;
    onAdd?: () => void;
}
export interface ElementPosition {
    index: number;
    rec: DOMRect;
    moved?: number;
}
export declare const ConviTab: React.FC<ConviTabProps>;
export default ConviTab;
