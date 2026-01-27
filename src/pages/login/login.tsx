import { Link, useNavigate } from "react-router-dom";
import { AccountModal } from "../../shared";
import styles from "../../shared/styles/user.module.css";
import { ILoginForm } from "./login.types";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/use-login";

export function LoginPage(){
    const { register, handleSubmit } = useForm<ILoginForm>()
    const { loginUser } = useLogin()
    const navigate = useNavigate()
    async function onSubmit(data: ILoginForm) {
        await loginUser(data)
        navigate("/")
    }
    return (
        <main className={styles.pageMain}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AccountModal>
                    <div className = {styles.registrationModalTitle}>
                        <h1 className={styles.registrationTitle}>Авторизація</h1>
                        <h2 className={styles.registrationSubtitle}>Ще не маєте акаунту?<br />Тоді ви можете зареєструватись <span className = {styles.goToLogin}><Link to = "/registration">ось тут</Link></span></h2>
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>Пошта</h3>
                        <input {...register("email")} className = {styles.inputContent} type="text" />
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>Пароль</h3>
                        <input {...register("password")} className = {styles.inputContent} type="password" />
                    </div>
                </AccountModal>
            </form>
        </main>
    )
}