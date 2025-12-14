import { Filter } from "../../components/filter/filter";
import { Header } from "../../app/header";
import { Urls } from "../../app/urls";
import { PostList } from "../../app/postList";
import style from "../all-posts/all-posts.module.css"
import { useState } from "react";
import { IPost } from "../../app/postCard/postCard.types";


export const tags = [
    {
        id: 0,
        name: "#перший_пост"
    },
    {
        id: 1,
        name: "#вітання"
    }
]     
export function AllPosts(){
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([
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
        }],
        likes: 0
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
        }],
        likes: 30
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
        }],
        likes: 70
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
        }],
        likes: 120
    }
])
    function setPosts(posts: IPost[]){
        setFilteredPosts(posts)
    }
    return (
        <div className = {style.bodyPage}>
            <Header filteredPosts={filteredPosts} setFilteredPosts={setPosts}></Header>
            <main className={style.pageMain}>
                <Urls setFilteredPosts={setPosts}>
                    <Filter filteredPosts={filteredPosts} tags = {tags} setFilteredPosts={setPosts}></Filter>
                </Urls>
                <PostList posts = {filteredPosts}></PostList>
            </main>
        </div>
    )
}