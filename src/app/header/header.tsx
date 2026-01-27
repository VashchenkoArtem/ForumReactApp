import { useContext } from "react"
import style from "./header.module.css"
import { TranslationContext } from "../../context/localizationContext"
import { Link } from "react-router-dom"

  
export function Header(){
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <Link to = "/" className = {style.hatLogo}>LOGO</Link>
            </div>
            <div className = {style.hatProfile}>
                <Link to = "/login" className = {style.enterToAccount}>{translate("EnterToAccount")}</Link>
            </div>
        </header>
    )
}