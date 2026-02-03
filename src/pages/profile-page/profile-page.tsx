import { useContext, useEffect } from "react";
import { Urls } from "../../app/urls";
import styles from "./profile-page.module.css"
import { PostContext } from "../../context/post-context";
import { ICONS } from "../../shared";
import { TranslationContext } from "../../context/lozalization-context";
import { UserContext } from "../../context/user-context";
import { useForm } from "react-hook-form";
import { IUpdateForm } from "./profile-page.types";
import { useUpdateUser } from "../../hooks/update-user";

export function ProfilePage(){
    const context  = useContext(PostContext)
    const userContext = useContext(UserContext)
    const translationContext = useContext(TranslationContext)
    const { updateUser } = useUpdateUser()
    const { register, handleSubmit, reset } = useForm<IUpdateForm>()
    const { user } = userContext || {}
    useEffect(() => {
        if (user) {
            reset({
                name: user.name,
                email: user.email
            })
        }
    }, [user, reset])
    if (!context || !translationContext || !userContext || !updateUser) return null
    const { handleInputFocus} = context
    const translate = translationContext.translate
    async function onSubmit(data: IUpdateForm) {
        await updateUser(data)
    }

    return (
        <main className={styles.pageMain}>
            <Urls setModalOpen={handleInputFocus}></Urls>
            <form className={styles.mainContent} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.avatarContainer}>
                    <h1 className={`${styles.avatarTitle} ${styles.containerTitle}`}>{translate("avatarLabel")}</h1>
                    <div className={`${styles.avatarInformation} ${styles.containerContent}`}>
                        <ICONS.pusheen className={styles.avatar} />
                        <button className={styles.changeAvatarButton}>{translate("changeAvatarButton")}</button>
                    </div>
                </div>
                <div className={styles.profileInfoContainer}>
                    <h1 className={`${styles.profileInfoTitle} ${styles.containerTitle}`}>{translate("informationAboutMe")}</h1>
                    <div className={`${styles.profileInfoInputs} ${styles.containerContent}`}>
                        <label className={styles.profileInfoInputLabel}>
                            {translate("nameLabel")}
                            <input {...register("name")} type="text" className={styles.profileInput} defaultValue = {user?.name} />
                        </label>
                        <label className={styles.profileInfoInputLabel}>
                            {translate("emailLabel")}
                            <input {...register("email")} type="text" className={styles.profileInput} defaultValue = {user?.email} />
                        </label>
                    </div>
                </div>
                <div className={styles.editProfileButtonContainer}>
                    <button className={styles.editProfileButton}>{translate("editInformationButton")}</button>
                </div>
            </form>
        </main>
    )
}