import React, { HTMLAttributes } from 'react';
import { ConviSplitPanelItemProp } from './ConviSplitPanelItem';
export interface ConviSplitPanelProp extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement<ConviSplitPanelItemProp>[];
    resizerThickness?: number;
    dir?: 'col' | 'row';
}
export declare const ConviSplitPanel: React.FC<ConviSplitPanelProp>;
export default ConviSplitPanel;
