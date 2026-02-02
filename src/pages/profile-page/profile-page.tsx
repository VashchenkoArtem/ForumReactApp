import { useContext } from "react";
import { Urls } from "../../app/urls";
import styles from "./profile-page.module.css"
import { PostContext } from "../../context/postContext";
import { ICONS } from "../../shared";

export function ProfilePage(){
    const context  = useContext(PostContext)
    if (!context) return null
    const { handleInputFocus} = context
    return (
        <main className={styles.pageMain}>
            <Urls setModalOpen={handleInputFocus}></Urls>
            <div className={styles.mainContent}>
                <div className={styles.avatarContainer}>
                    <h1 className={`${styles.avatarTitle} ${styles.containerTitle}`}>Аватар</h1>
                    <div className={`${styles.avatarInformation} ${styles.containerContent}`}>
                        <ICONS.pusheen className={styles.avatar} />
                        <button className={styles.changeAvatarButton}>Змінити фото</button>
                    </div>
                </div>
                <div className={styles.profileInfoContainer}>
                    <h1 className={`${styles.profileInfoTitle} ${styles.containerTitle}`}>Контактні дані</h1>
                    <div className={`${styles.profileInfoInputs} ${styles.containerContent}`}>
                        <label className={styles.profileInfoInputLabel}>
                            Ім'я
                            <input type="text" className={styles.profileInput} />
                        </label>
                        <label className={styles.profileInfoInputLabel}>
                            Пошта
                            <input type="text" className={styles.profileInput} />
                        </label>
                    </div>
                </div>
                <div className={styles.editProfileButtonContainer}>
                    <button className={styles.editProfileButton}>Редагувати</button>
                </div>
            </div>
        </main>
    )
}