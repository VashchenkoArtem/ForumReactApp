import style from "./layout.module.css"
import { Header } from "../header/header"
import { Urls } from "../urls/urls"
import { useEffect, useState } from "react"
import { IPost } from "../../shared/types"
import { usePostsAndTags } from "../../hooks/use-posts-and-tags"
import { MoonLoader } from "react-spinners"
import { PostList } from "../../components/postList"


export function Layout(){
    const productsAndTags = usePostsAndTags()
    const { unfilteredPosts, setUnfilteredPosts, tags, setTags, loading } = productsAndTags
    if (loading){
        return (
            <div className = {style.bodyPage}>
                <Header></Header>
                <main className={style.pageMainWithSpinner}>
                    <Urls></Urls>
                    <MoonLoader
                    color="#0338bc"
                    cssOverride={{}}
                    loading
                    size={40}
                    speedMultiplier={1}
                    />
                </main>
            </div>
        )
    }
    return (
        <div className = {style.bodyPage}>
            <Header></Header>
            <main className={style.pageMain}>
                <Urls></Urls>
                <PostList posts = {unfilteredPosts}></PostList>
            </main>
        </div>
    )
}   