import { useContext } from "react"
import { InputSearch } from "../input"
import style from "./header.module.css"
import { PostContext } from "../../context/post-context"
import { TranslationContext } from "../../context/lozalization-context"
import { Link } from "react-router-dom"

  
export function HeaderWithInput(){
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <Link to = "/" className = {style.hatLogo}>LOGO</Link>
            </div>
            <InputSearch></InputSearch>
            <div className = {style.hatProfile}>
                <Link to = "/login" className = {style.enterToAccount}>{translate("EnterToAccount")}</Link>
            </div>
        </header>
    )
}