import { Link } from "react-router-dom";
import { AccountModal } from "../../shared";
import styles from "../../shared/styles/user.module.css";

export function LoginPage(){
    return (
        <main className={styles.pageMain}>
            <AccountModal>
                <div className = {styles.registrationModalTitle}>
                    <h1 className={styles.registrationTitle}>Авторизація</h1>
                    <h2 className={styles.registrationSubtitle}>Ще не маєте акаунту?<br />Тоді ви можете зареєструватись <span className = {styles.goToLogin}><Link to = "/registration">ось тут</Link></span></h2>
                </div>
                <div className = {styles.inputContainer}>
                    <h3 className = {styles.inputTitle}>Пошта</h3>
                    <input className = {styles.inputContent} type="text" />
                </div>
                <div className = {styles.inputContainer}>
                    <h3 className = {styles.inputTitle}>Пароль</h3>
                    <input className = {styles.inputContent} type="password" />
                </div>
            </AccountModal>
        </main>
    )
}