
import style from "./postList.module.css"
import { IProps } from "./postList.types"
import { PostCard } from "../postCard/postCard";



export function PostList(props: IProps){
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