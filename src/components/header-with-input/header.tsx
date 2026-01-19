import { useContext } from "react"
import { InputSearch } from "../input"
import style from "./header.module.css"
import { PostContext } from "../../context/postContext"
import { TranslationContext } from "../../context/localizationContext"

  
export function HeaderWithInput(){
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <InputSearch></InputSearch>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>{translate("EnterToAccount")}</h1>
            </div>
        </header>
    )
}