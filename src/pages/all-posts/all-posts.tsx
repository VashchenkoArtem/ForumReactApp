import { Filter } from "../../components/filter/filter";
import { Urls } from "../../app/urls";
import { PostList } from "../../app/postList";
import style from "../all-posts/all-posts.module.css"
import { useState } from "react";
import { IPost } from "../../app/postCard/postCard.types";
import { HeaderWithInput } from "../../components/header-with-input";
import { UrlsWithFilter } from "../../components/urls-with-filter";


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
    console.log(filteredPosts)
    return (
        <div className = {style.bodyPage}>
            <HeaderWithInput filteredPosts={filteredPosts} setFilteredPosts={setPosts}></HeaderWithInput>
            <main className={style.pageMain}>
                <UrlsWithFilter filteredPosts={filteredPosts} tags = {tags} setFilteredPosts={setPosts}/>
                <PostList posts = {filteredPosts}></PostList>
            </main>
        </div>
    )
}