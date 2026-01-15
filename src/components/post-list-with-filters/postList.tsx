import { PostContext } from "../../context/post-context";
import { PostCard } from "../postCard";
import style from "./postList.module.css"
import { useContext, useEffect } from "react";


export function PostListWithFilter(){
    const context = useContext(PostContext)
    useEffect(() => {
        if (!context?.unfilteredPosts)return
        let result = [...context?.unfilteredPosts]

        if (context?.inputData) {
            result = result.filter(post =>
                post.title.toLowerCase().includes(context?.inputData.toLowerCase())
            )
        }
        if (context?.inputLikes) {
            result = result.filter((post) =>{
                console.log(post.likes.length)
                return post.likes.length > context?.inputLikes
        })
        }
        
        if (context?.inputTags) {
            result = result.filter(post =>
            context?.inputTags.every(tagName =>
                post.tags?.some(t => t.tag.name === tagName)
            )
            )

        }
        context?.setItems(result)
    }, [context?.inputData, context?.inputLikes, context?.inputTags, context?.unfilteredPosts])

    return (
        <div className={style.postsWithFilter}>
            <div className={style.posts}>
                { context?.filteredItems.map((post) => {
                    return <PostCard key = {post.id} post = {post}></PostCard>
                })}
            </div>
        </div>
    )
}