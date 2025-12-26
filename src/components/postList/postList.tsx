
import style from "./postList.module.css"
import { PostCard } from "../postCard/postCard";
import { IPostsProps } from "../../shared/types";



export function PostList(props: IPostsProps){
    const { posts } = props
    return (
        <div className={style.postsWithFilter}>
            <div className={style.posts}>
                { posts.map((post) => {
                    return <PostCard key = {post.id} post = {post}></PostCard>
                })}
            </div>
        </div>
    )
}