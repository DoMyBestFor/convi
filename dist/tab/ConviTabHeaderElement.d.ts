import React from 'react';
export interface ConviTabHeaderElementProps {
    children: string;
    selected: boolean;
    index: number;
    onTabTitleChange: (newTitle: string) => void;
    onHeaderDrag: (e: any) => void;
    onHeaderDragEnd: (e: any) => void;
    draggableTab?: boolean;
    ableChangeTitle?: boolean;
    icon?: React.ReactElement;
    fixed?: boolean;
    onSelected: (index: number) => void;
    onClose: () => void;
}
export declare const ConviTabHeaderElement: React.ForwardRefExoticComponent<ConviTabHeaderElementProps & React.RefAttributes<React.ReactElement<ConviTabHeaderElementProps, string | React.JSXElementConstructor<any>>>>;
