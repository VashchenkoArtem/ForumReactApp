import style from "./mainPage.module.css"
import { PostList } from "../postList/postList"
import { Header } from "../header/header"
import { Main } from "../main/main"
import { postsList } from "../input/input"
import { useEffect, useState } from "react"
import { IPost } from "../postCard/postCard.types"
import { Urls } from "../urls/urls"


export function MainPage(){
    const [filteredPosts, setfilteredPosts] = useState<IPost[]>([
    {
        id: 0,
        title: "First Post",
        description: "My first post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }]
    },
    {
        id: 1,
        title: "Second Post",
        description: "My second post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }]
    },
    {
        id: 2,
        title: "Third Post",
        description: "My third post",
        image: "image.png",
        userId: 2,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }]
    },
    {
        id: 3,
        title: "Forth Post",
        description: "My forth post",
        image: "image.png",
        userId: 4,
        tags: [{
            id: 0,
            name: "#перший_пост"
        }]
    }
])
    return (
        <div className = {style.bodyPage}>
            <Header setFilteredPosts={setfilteredPosts}></Header>
            <Main setFilteredPosts={setfilteredPosts}>
                <PostList posts = {filteredPosts}></PostList> 
            </Main>
        </div>
    )
}   