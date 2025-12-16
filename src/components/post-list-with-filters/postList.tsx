
import { PostCard } from "../../app/postCard";
import style from "./postList.module.css"
import { IProps } from "./postList.types"
import { useEffect } from "react";

const posts = [
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
]

export function PostListWithFilter(props: IProps){
    const { filteredPosts, inputData, setFilteredPosts, inputLikes, inputTags } = props
    useEffect(() => {
        let filteredPosts = [...posts]

        if (inputData) {
            filteredPosts = filteredPosts.filter(post =>
                post.title.includes(inputData)
            )
        }

        if (inputLikes) {
            filteredPosts = filteredPosts.filter(post =>
                post.likes > inputLikes
            )
        }

        if (inputTags) {
            filteredPosts = filteredPosts.filter(post =>
                post.tags.some(tag => tag.name === inputTags)
            )
        }

        setFilteredPosts(filteredPosts)
    }, [inputData, inputLikes, inputTags, posts])

    return (
        <div className={style.postsWithFilter}>
            <div className={style.posts}>
                { filteredPosts.map((post) => {
                    return <PostCard key = {post.id} post = {post}></PostCard>
                })}
            </div>
        </div>
    )
}