import { useContext } from "react"
import style from "./header.module.css"
import { TranslationContext } from "../../context/localizationContext"

  
export function Header(){
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>{translate("EnterToAccount")}</h1>
            </div>
        </header>
    )
}