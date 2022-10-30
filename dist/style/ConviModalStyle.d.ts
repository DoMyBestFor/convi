/// <reference types="react" />
interface ConviModalStyleProps {
    open: boolean;
    width?: string;
    height?: string;
}
export declare const ConviModalStyle: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ConviModalStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ConviModalTitle: import("@emotion/utils").SerializedStyles;
export {};
