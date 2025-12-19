import style from "./layout.module.css"
import { PostList } from "../postList/postList"
import { Header } from "../header/header"
import { Urls } from "../urls/urls"
import { useEffect, useState } from "react"
import { IPost } from "../postCard/postCard.types"


// const posts = [
//     {
//         id: 0,
//         title: "First Post",
//         description: "My first post",
//         image: "image.png",
//         userId: 1,
//         tags: [{
//             id: 0,
//             name: "#перший_пост"
//         },
//         {
//             id: 1,
//             name: "#вітання"
//         }],
//         likes: 0
//     },
//     {
//         id: 1,
//         title: "Second Post",
//         description: "My second post",
//         image: "image.png",
//         userId: 1,
//         tags: [{
//             id: 0,
//             name: "#перший_пост"
//         },
//         {
//             id: 1,
//             name: "#вітання"
//         }],
//         likes: 30
//     },
//     {
//         id: 2,
//         title: "Third Post",
//         description: "My third post",
//         image: "image.png",
//         userId: 2,
//         tags: [{
//             id: 0,
//             name: "#перший_пост"
//         },
//         {
//             id: 1,
//             name: "#вітання"
//         }],
//         likes: 70
//     },
//     {
//         id: 3,
//         title: "Forth Post",
//         description: "My forth post",
//         image: "image.png",
//         userId: 4,
//         tags: [{
//             id: 0,
//             name: "#перший_пост"
//         }],
//         likes: 120
//     }
// ]
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