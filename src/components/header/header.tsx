import style from "./header.module.css"
import { ReactComponent as Search } from "../../assets/icons/search.svg"
import { useState } from "react";


export function Header(){
    const [search, setSearch] = useState<string>("")
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <div className = {style.hatInputContainer}>
                <input 
                type="text" 
                className = {style.inputSearch} 
                placeholder="Знайти пост" 
                name = "search" 
                value = {search}
                onChange = {(event)=>{
                    const input = event.target.value;
                    setSearch(input)
                }}/>
            </div>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>Увійти</h1>
            </div>
        </header>
    )
}