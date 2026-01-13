import { createPortal } from "react-dom"
import { useTags } from "../../hooks/use-tags"
import styles from "./modal.module.css"
import { IModalProps } from "../types/modal"

export function Modal(props: IModalProps){
    const { container = document.body, children} = props
    const { tags } = useTags()
    return createPortal(
        children,
        container
    )
}