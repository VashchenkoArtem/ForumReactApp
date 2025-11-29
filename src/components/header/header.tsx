import style from "./header.module.css"
import { ReactComponent as Search } from "../../assets/icons/search.svg"


export function Header(){
    return (
        <header className = {style.pageHat}>
            <h1 className = {style.hatLogo}>LOGO</h1>
            <div className = {style.hatInputContainer}>
                <Search className={style.searchImage}></Search>
                <input type="text" className = {style.inputSearch} placeholder="Знайти пост"/>
            </div>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>Увійти</h1>
            </div>
        </header>
    )
}