
import { PostCard } from "../../app/postCard";
import style from "./postList.module.css"
import { IProps } from "./postList.types"
import { useEffect } from "react";
export function PostListWithFilter(props: IProps){
    const { filteredPosts, inputData, setFilteredPosts, inputLikes, inputTags, unfilteredPosts } = props
    useEffect(() => {
        let result = [...unfilteredPosts]

        if (inputData) {
            result = result.filter(post =>
                post.title.toLowerCase().includes(inputData.toLowerCase())
            )
        }

        if (inputLikes) {
            result = result.filter(post =>
                post.likes > inputLikes
            )
        }

        if (inputTags) {
            result = result.filter(post =>
                post.tags?.some(tag => tag.tag.name === inputTags)
            )
        }
        setFilteredPosts(result)
    }, [inputData, inputLikes, inputTags, unfilteredPosts])

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