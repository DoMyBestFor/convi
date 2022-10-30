import React from 'react';
export interface ConviSplitPanelItemProp {
    children: React.ReactNode;
    size?: number;
    initialSize?: number;
    maxSize?: number;
    minSize?: number;
    dir?: 'col' | 'row';
}
export declare const ConviSplitPanelItem: React.ForwardRefExoticComponent<ConviSplitPanelItemProp & React.RefAttributes<React.ReactElement<ConviSplitPanelItemProp, string | React.JSXElementConstructor<any>>>>;
export default ConviSplitPanelItem;
