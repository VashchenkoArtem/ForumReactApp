import style from "./layout.module.css"
import { PostList } from "../postList/postList"
import { Header } from "../header/header"
import { Urls } from "../urls/urls"
import { useEffect, useState } from "react"
import { IPost } from "../../shared/types"


export function Layout(){
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch("http://localhost:8000/posts")
                const allPosts: IPost[] = await response.json()
                setPosts(allPosts)
            } catch (error) {
                console.log(error)
            }
        }

        getAllPosts()
    }, [])
    return (
        <div className = {style.bodyPage}>
            <Header></Header>
            <main className={style.pageMain}>
                <Urls></Urls>
                <PostList posts = {posts}></PostList>
            </main>
        </div>
    )
}   