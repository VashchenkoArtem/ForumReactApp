
import style from "./postList.module.css"
import { IProps } from "./postList.types"
import { ReactComponent as ArrowUp } from "../../assets/icons/arrowUp.svg"
import { PostCard } from "../postCard/postCard";

export function PostList(props: IProps){
    const posts  = props.posts;
    return (
        <div className={style.postsWithFilter}>
            <div className={style.posts}>
                { posts.map((post) => {
                    return <PostCard post = {post}></PostCard>

                })}
            </div>
        </div>
    )
}