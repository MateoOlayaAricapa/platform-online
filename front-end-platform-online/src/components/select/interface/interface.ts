import { CSSProperties, ReactElement } from "react";

export interface SelectProps {
    title?           : string;
    name?            : string;
    initialValue?    : string;
    children?        : ReactElement | ReactElement[];
    className?       : string;
    classNameOption? : string;
    styleOption?     : CSSProperties;
    styleListOptions?: CSSProperties;
    onChange?        : ( args: OnChangeArgs ) => void;
}

export interface OnChangeArgs {
    value: string;
    name : string;
}

export interface SelectContextProps {
    styleOption?        : CSSProperties;
    classNameOption?    : string;
    onHandleSelectOption: ( value: string ) => void;
}