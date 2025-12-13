import style from "./layout.module.css"
import { PostList } from "../postList/postList"
import { Header } from "../header/header"
import { useState } from "react"
import { IPost } from "../postCard/postCard.types"
import { Urls } from "../urls/urls"
import { Outlet } from "react-router-dom"

const tags = [
    {
        id: 0,
        name: "#перший_пост"
    },
    {
        id: 1,
        name: "#вітання"
    }
] 

export function Layout(){
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>(
        [
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
    function setPosts(filteredPosts: IPost[]){
        setFilteredPosts(filteredPosts)
    }
    return (
        <div className = {style.bodyPage}>
            <Header filteredPosts={filteredPosts} setFilteredPosts={setPosts}></Header>
            <main className={style.pageMain}>
                <Urls setFilteredPosts={setPosts}>
                    <Outlet></Outlet>
                </Urls>
                <PostList posts = {filteredPosts}></PostList>
            </main>
        </div>
    )
}   