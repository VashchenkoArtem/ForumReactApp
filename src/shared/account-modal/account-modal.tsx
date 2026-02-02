import { IAccountModalProps } from "./account-modal.types";
import styles from "./account-modal.module.css"
import { useContext } from "react";
import { TranslationContext } from "../../context/lozalization-context";

export function AccountModal(props: IAccountModalProps){
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    const { children } = props
    return (
        <div className = {styles.accountModal}>
            { children }
            <button className = {styles.sendButton}>{translate("buttonSend")}</button>
        </div>
    )
}