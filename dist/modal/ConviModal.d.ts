import React, { ReactNode } from 'react';
interface ConviModalProps {
    open: boolean;
    onClose: () => void;
    preventBackdropClick?: boolean;
    children: ReactNode;
    title: ReactNode;
    width?: string;
    height?: string;
}
export declare const ConviModal: React.FC<ConviModalProps>;
export default ConviModal;
