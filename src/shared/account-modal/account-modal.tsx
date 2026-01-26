import { IAccountModalProps } from "./account-modal.types";
import styles from "./account-modal.module.css"

export function AccountModal(props: IAccountModalProps){
    const { children } = props
    return (
        <div className = {styles.accountModal}>
            { children }
            <button className = {styles.sendButton}>Надіслати</button>
        </div>
    )
}