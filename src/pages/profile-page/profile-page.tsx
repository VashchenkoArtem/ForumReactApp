import { useContext } from "react";
import { Urls } from "../../app/urls";
import styles from "./profile-page.module.css"
import { PostContext } from "../../context/postContext";
import { ICONS } from "../../shared";
import { TranslationContext } from "../../context/localizationContext";

export function ProfilePage(){
    const context  = useContext(PostContext)
    const translationContext = useContext(TranslationContext)
    if (!context) return null
    const { handleInputFocus} = context
    if (!translationContext) return null
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
                            <input type="text" className={styles.profileInput} />
                        </label>
                        <label className={styles.profileInfoInputLabel}>
                            {translate("emailLabel")}
                            <input type="text" className={styles.profileInput} />
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