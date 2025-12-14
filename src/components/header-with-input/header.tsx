import { InputSearch } from "../input"
import style from "./header.module.css"
import { IProps } from "./header.types"

  
export function HeaderWithInput(props: IProps){
    const { filteredPosts, setFilteredPosts} = props
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <InputSearch filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts}></InputSearch>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>Увійти</h1>
            </div>
        </header>
    )
}