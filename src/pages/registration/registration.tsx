import { Link } from "react-router-dom";
import { AccountModal } from "../../shared";
import styles from "../../shared/styles/user.module.css";
import { Header } from "../../app/header";
import { Urls } from "../../app/urls";

export function RegistrationPage(){
    return (
        <main className={styles.pageMain}>
            <AccountModal>
                <div className = {styles.registrationModalTitle}>
                    <h1 className={styles.registrationTitle}>Реєстрація</h1>
                    <h2 className={styles.registrationSubtitle}>Вже маєте акаунт?<br />Тоді ви можете авторизуватись <span className = {styles.goToLogin}><Link to = "/login">ось тут</Link></span></h2>
                </div>
                <div className = {styles.nameAndAvatar}>
                    <div className = {`${styles.inputContainer}`}>
                        <h3 className = {styles.inputTitle}>Ім'я</h3>
                        <input className = {`${styles.inputContent} ${styles.smallInput}`} type="text" />
                    </div>
                    <div className = {`${styles.inputContainer}`}>
                        <h3 className = {styles.inputTitle}>Аватар</h3>
                        <input className = {`${styles.inputContent} ${styles.smallInput}`} type="text" />
                    </div>
                </div>
                <div className = {styles.inputContainer}>
                    <h3 className = {styles.inputTitle}>Пошта</h3>
                    <input className = {styles.inputContent} type="text" />
                </div>
                <div className = {styles.inputContainer}>
                    <h3 className = {styles.inputTitle}>Пароль</h3>
                    <input className = {styles.inputContent} type="password" />
                </div>
                <div className = {styles.inputContainer}>
                    <h3 className = {styles.inputTitle}>Підтвердження паролю</h3>
                    <input className = {styles.inputContent} type="password" />
                </div>
            </AccountModal>
        </main>
    )
}