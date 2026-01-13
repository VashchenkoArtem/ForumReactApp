
import style from "./postList.module.css"
import { PostCard } from "../postCard/postCard";
import { usePosts } from "../../hooks/use-posts";
import { MoonLoader } from "react-spinners";



export function PostList(){
    const { unfilteredPosts, loading } = usePosts()
    if (loading){
        return (
            <div className = {style.postsWithFilter}>
                    <MoonLoader
                    color="#0338bc"
                    cssOverride={{}}
                    loading
                    size={40}
                    speedMultiplier={1}
                    />
            </div>
        )
    }
    return (
        <div className={style.postsWithFilter}>
            <div className={style.posts}>
                { unfilteredPosts.map((post) => {
                    return <PostCard key = {post.id} post = {post}></PostCard>
                })}
            </div>
        </div>
    )
}