import { ICONS } from "../../shared";
import style from "./postCard.module.css"
import { IPropsPostCard } from "../../shared/types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAddLike } from "../../hooks/use-add-like";

const Profile = ICONS.profile
const LikeIcon = ICONS.like

export function PostCard(props: IPropsPostCard){
    const post = props.post;
    const [isLiked, setLike] = useState<boolean>(false)
    const { addLike } = useAddLike()
    return  <div className={style.post}>
        <div className={style.postHat}>
            <div className={style.postAuthor}>
                <Profile className={style.postAuthorAvatar}></Profile>
                <h1 className={style.postAuthorName}>{post.createdBy.firstName}</h1>
            </div>
            <div className = {style.line}></div>
        </div>
        <div className={style.postMainContent}>
            <h1 className={style.postTitle}>{post.title}</h1>
            <h1 className = {style.postContent}>{post.description}</h1>
            <div className={style.postTags}>
                {post.tags?.map((tag) => {
                    return <div key = {tag.tag.id} className={style.postTag}>
                        <h1 className={style.postTagTitle}>#{tag.tag.name}</h1>
                    </div>  
                })}
            </div>
            <div className={style.likeAndGoToPost}>
                <LikeIcon className = {style.likeIcon} onClick = {()=>{
                    addLike(1, 3)
                    // isLiked ? setLike(false) : setLike(true)
                }}></LikeIcon>
                <h1 className={style.goToPost}>{post.likes?.length}</h1>
                <Link to={`/posts/${post.id}`}>
                    <h1 className={style.goToPost}>Перейти до посту</h1>
                </Link>
            </div>
        </div>
    </div>
}