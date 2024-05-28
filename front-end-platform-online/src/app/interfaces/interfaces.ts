import { ChangeEventHandler } from "react";

export interface FormLogin {
    email   : string;
    password: string;
}

export interface FormRegister {
    name    : string;
    surnames: string;
    email   : string;
    password: string;
}

export interface ListTextFields {
    type        : 'password' | 'text' | 'checkbox' | 'email';
    title?      : string;
    value?      : string;
    name?       : string;
    placeHolder?: string;
    onChange?   : ChangeEventHandler<HTMLInputElement>;
}