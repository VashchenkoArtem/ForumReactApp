import { Filter } from "../../components/filter"
import { InputSearch } from "../../components/input"
import { tags } from "../../pages/all-posts/all-posts"
import style from "./header.module.css"
import { IProps } from "./header.types"

  
export function Header(props: IProps){
    const { filteredPosts, setFilteredPosts} = props
    if (filteredPosts && setFilteredPosts){
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
    else{
        return (
            <header className = {style.pageHat}>
                <div className = {style.logoContainer}>
                    <h1 className = {style.hatLogo}>LOGO</h1>
                </div>
                <div className = {style.hatProfile}>
                    <h1 className = {style.enterToAccount}>Увійти</h1>
                </div>
            </header>
        )   
    }
}