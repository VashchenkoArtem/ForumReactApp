import { Link, useNavigate } from "react-router-dom";
import { AccountModal } from "../../shared";
import styles from "../../shared/styles/user.module.css";
import { Header } from "../../app/header";
import { Urls } from "../../app/urls";
import { useForm } from "react-hook-form";
import { IRegistrationForm } from "./registration.types";
import { useRegistration } from "../../hooks/use-registration";

export function RegistrationPage(){
    const { register, handleSubmit } = useForm<IRegistrationForm>()
    const { registerUser } = useRegistration()
    const navigate  = useNavigate()
    async function onSubmit(data: IRegistrationForm) {
        await registerUser(data)
        navigate("/")
    }
    return (
        <main className={styles.pageMain}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AccountModal>
                    <div className = {styles.registrationModalTitle}>
                        <h1 className={styles.registrationTitle}>Реєстрація</h1>
                        <h2 className={styles.registrationSubtitle}>Вже маєте акаунт?<br />Тоді ви можете авторизуватись <span className = {styles.goToRegistration}><Link to = "/login">ось тут</Link></span></h2>
                    </div>
                    <div className = {styles.nameAndAvatar}>
                        <div className = {`${styles.inputContainer}`}>
                            <h3 className = {styles.inputTitle}>Ім'я</h3>
                            <input {...register("name")} className = {`${styles.inputContent} ${styles.smallInput}`} type="text" />
                        </div>
                        <div className = {`${styles.inputContainer}`}>
                            <h3 className = {styles.inputTitle}>Аватар</h3>
                            <input {...register("avatar")} className = {`${styles.inputContent} ${styles.smallInput}`} type="text" />
                        </div>
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>Пошта</h3>
                        <input {...register("email")} className = {styles.inputContent} type="text" />
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>Пароль</h3>
                        <input {...register("password")} className = {styles.inputContent} type="password" />
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>Підтвердження паролю</h3>
                        <input {...register("confirmPassword")} className = {styles.inputContent} type="password" />
                    </div>
                </AccountModal>
            </form>
        </main>
    )
}