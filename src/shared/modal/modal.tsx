import { createPortal } from "react-dom"
import { useTags } from "../../hooks/use-tags"
import styles from "./modal.module.css"
import { IModalProps } from "./modal.types"
import { useEffect, useRef } from "react"

export function Modal(props: IModalProps){
    const { container = document.body, children, doCloseOnOutsideClick, onClose, isOpen, className} = props
    const modalRef = useRef<HTMLDivElement>(null)
    console.log(isOpen)
    useEffect(() => {
        if (!doCloseOnOutsideClick) return

        function clickNotToModal(event: MouseEvent){
            const target = event.target as HTMLElement
            if (!modalRef.current?.contains(target)) {
                onClose()
            }
        }
        document.body.addEventListener("click", clickNotToModal)
        return () => document.body.removeEventListener("click", clickNotToModal)
    }, [onClose, doCloseOnOutsideClick])
    if (!isOpen) {
        return null
    }
    return createPortal(
        <div className={`${className}`} ref={modalRef}>

            {children}
        </div>,
        container
    )
}