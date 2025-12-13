import style from "./header.module.css"
import { IPost } from "../postCard/postCard.types";
import { InputSearch } from "../../components/input/input-search";
import { IProps } from "../../components/input/input.types";


export function Header(props: IProps){
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <InputSearch filteredPosts={props.filteredPosts} setFilteredPosts = {props.setFilteredPosts}></InputSearch>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>Увійти</h1>
            </div>
        </header>
    )
}