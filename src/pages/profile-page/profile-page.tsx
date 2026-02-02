import { useContext } from "react";
import { Urls } from "../../app/urls";
import styles from "./profile-page.module.css"
import { PostContext } from "../../context/post-context";
import { ICONS } from "../../shared";
import { TranslationContext } from "../../context/lozalization-context";
import { UserContext } from "../../context/user-context";

export function ProfilePage(){
    const context  = useContext(PostContext)
    const userContext = useContext(UserContext)
    const translationContext = useContext(TranslationContext)
    if (!context || !translationContext || !userContext) return null
    const { handleInputFocus} = context
    const { user } = userContext
    const translate = translationContext.translate
    return (
        <main className={styles.pageMain}>
            <Urls setModalOpen={handleInputFocus}></Urls>
            <div className={styles.mainContent}>
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
                            <input type="text" className={styles.profileInput} value = {user?.name} />
                        </label>
                        <label className={styles.profileInfoInputLabel}>
                            {translate("emailLabel")}
                            <input type="text" className={styles.profileInput} value = {user?.email} />
                        </label>
                    </div>
                </div>
                <div className={styles.editProfileButtonContainer}>
                    <button className={styles.editProfileButton}>{translate("editInformationButton")}</button>
                </div>
            </div>
        </main>
    )
}