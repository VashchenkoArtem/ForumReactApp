import { Link, useNavigate } from "react-router-dom";
import { AccountModal } from "../../shared";
import styles from "../../shared/styles/user.module.css";
import { ILoginForm } from "./login.types";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/use-login";
import { useContext } from "react";
import { TranslationContext } from "../../context/localizationContext";

export function LoginPage(){
    const { register, handleSubmit } = useForm<ILoginForm>()
    const { loginUser } = useLogin()
    const navigate = useNavigate()
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    async function onSubmit(data: ILoginForm) {
        await loginUser(data)
        navigate("/")
    }
    return (
        <main className={styles.pageMain}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AccountModal>
                    <div className = {styles.registrationModalTitle}>
                        <h1 className={styles.registrationTitle}>{translate("authorizationPageTitle")}</h1>
                        <h2 className={styles.registrationSubtitle}>{translate("isRegistred")}<br />{translate("registerNow")} <span className = {styles.goToLogin}><Link to = "/registration">{translate("registerThere")}</Link></span></h2>
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>{translate("emailLabel")}</h3>
                        <input {...register("email")} className = {styles.inputContent} type="text" />
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>{translate("passwordLabel")}</h3>
                        <input {...register("password")} className = {styles.inputContent} type="password" />
                    </div>
                </AccountModal>
            </form>
        </main>
    )
}