import { useContext } from "react"
import styles from "./chooseLanguage.module.css"
import { ILanguageProps } from "./chooseLanguage.types"
import { TranslationContext } from "../../context/lozalization-context"

export function ChooseLanguage(props: ILanguageProps){
    const { isOpenLanguage } = props
    const translationContext = useContext(TranslationContext)
    if (!isOpenLanguage || !translationContext) return null
    const {locale, setLocaleTranslation} = translationContext
    return (
        <div className = {styles.languageContainer}>
            <select 
            name="language" 
            className={styles.languageSelect} 
            value = {locale}
            onClick={(event) => {
                event.stopPropagation()
            }}
            onChange={(event) => {
                setLocaleTranslation(event.target.value)
            }}>
                <option value="ua">Українська</option>
                <option value="en">English</option>
                <option value="pl">Polski</option>
            </select>
        </div>
    )
}