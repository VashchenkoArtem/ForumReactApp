import { useContext } from "react"
import style from "./header.module.css"
import { TranslationContext } from "../../context/lozalization-context"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/user-context"

  
export function Header(){
    const translationContext = useContext(TranslationContext)
    const userContext = useContext(UserContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <Link to = "/" className = {style.hatLogo}>LOGO</Link>
            </div>
            <div className = {style.hatProfile}>
                {userContext?.user ? <Link to = "/me" className={style.enterToAccount}>{userContext.user.name}</Link> :                 
                <Link to = "/login" className = {style.enterToAccount}>
                    {translate("EnterToAccount")}    
                </Link>
                }
            </div>
        </header>
    )
}