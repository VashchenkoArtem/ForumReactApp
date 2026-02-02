import { Link, useNavigate } from "react-router-dom";
import { AccountModal } from "../../shared";
import styles from "../../shared/styles/user.module.css";
import { Header } from "../../app/header";
import { Urls } from "../../app/urls";
import { useForm } from "react-hook-form";
import { IRegistrationForm } from "./registration.types";
import { useContext } from "react";
import { TranslationContext } from "../../context/lozalization-context";
import { UserContext } from "../../context/user-context";

export function RegistrationPage(){
    const { register, handleSubmit, formState: {errors} } = useForm<IRegistrationForm>()
    const navigate  = useNavigate()
    const translationContext = useContext(TranslationContext)
    const userContext = useContext(UserContext)
    if (!translationContext || !userContext) return null
    const translate = translationContext.translate
    const { registration } = userContext
    async function onSubmit(data: IRegistrationForm) {
        await registration(data)
        navigate("/")
    }
    const nameErrors = errors.name
    const emailErrors = errors.email
    const passwordErrors = errors.password
    const confirmPasswordErrors = errors.confirmPassword
    return (
        <main className={styles.pageMain}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <AccountModal>
                    <div className = {styles.registrationModalTitle}>
                        <h1 className={styles.registrationTitle}>{translate("registrationPageTitle")}</h1>
                        <h2 className={styles.registrationSubtitle}>{translate("isAuthorizated")}<br />{translate("authorizeNow")} <span className = {styles.goToRegistration}><Link to = "/login">{translate("registerThere")}</Link></span></h2>
                    </div>
                    <div className = {styles.nameAndAvatar}>
                        <div className = {`${styles.inputContainer}`}>
                            <h3 className = {styles.inputTitle}>{translate("nameLabel")}</h3>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: translate("requiredFieldError")
                                }
                            })} className = {`${styles.inputContent} ${styles.smallInput}`} type="text" />
                            { nameErrors && 
                                <p className = {styles.error}>{nameErrors.message}</p>
                            }
                            
                        </div>
                        <div className = {`${styles.inputContainer}`}>
                            <h3 className = {styles.inputTitle}>{translate("avatarLabel")}</h3>
                            <input {...register("avatar")} className = {`${styles.inputContent} ${styles.smallInput}`} type="text" />
                        </div>
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>{translate("emailLabel")}</h3>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: translate("requiredFieldError")
                            },
                            validate: (value) => {
                                if (!value.includes("@")){
                                    return translate("errorAtEmail")
                                }
                            }
                        })} className = {styles.inputContent} type="text" />
                            { emailErrors && 
                                <p className = {styles.error}>{emailErrors.message}</p>
                            }
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>{translate("passwordLabel")}</h3>
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: translate("requiredFieldError")
                            },
                            minLength: {
                                value: 8,
                                message: translate("minLengthAtPassword")
                            }
                        })} className = {styles.inputContent} type="password" />
                            { passwordErrors && 
                                <p className = {styles.error}>{passwordErrors.message}</p>
                            }
                    </div>
                    <div className = {styles.inputContainer}>
                        <h3 className = {styles.inputTitle}>{translate("confirmedPasswordLabel")}</h3>
                        <input {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: translate("requiredFieldError")
                            }
                        })} className = {styles.inputContent} type="password" />
                    </div>
                </AccountModal>
            </form>
        </main>
    )
}