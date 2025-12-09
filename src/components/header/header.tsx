import style from "./header.module.css"
import { ReactComponent as Search } from "../../assets/icons/search.svg"
import { useState } from "react";
import { IPost } from "../postCard/postCard.types";
import { InputSearch } from "../input/input"

export function Header(props: {setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>}){
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <InputSearch setFilteredPosts ={props.setFilteredPosts}></InputSearch>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>Увійти</h1>
            </div>
        </header>
    )
}