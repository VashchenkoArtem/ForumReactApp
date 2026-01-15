import { ReactNode } from "react";

export interface IModalProps{
    className: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    doCloseOnOutsideClick: boolean,
    container?: HTMLElement
}   