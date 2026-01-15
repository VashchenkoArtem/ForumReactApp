import { useContext } from "react"
import { InputSearch } from "../input"
import style from "./header.module.css"
import { PostContext } from "../../context/post-context"

  
export function HeaderWithInput(){
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <InputSearch></InputSearch>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>Увійти</h1>
            </div>
        </header>
    )
}