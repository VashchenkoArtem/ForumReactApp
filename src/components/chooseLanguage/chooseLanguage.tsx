import styles from "./chooseLanguage.module.css"
import { ILanguageProps } from "./chooseLanguage.types"

export function ChooseLanguage(props: ILanguageProps){
    const { isOpenLanguage } = props
    if (!isOpenLanguage) return null
    return (
        <div className = {styles.languageContainer}>
            <select name="language" className={styles.languageSelect}>
                <option value="ukrainian">Українська</option>
                <option value="english">English</option>
            </select>
        </div>
    )
}