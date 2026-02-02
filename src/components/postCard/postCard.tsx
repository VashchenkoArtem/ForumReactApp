import { ICONS } from "../../shared";
import style from "./postCard.module.css"
import { IPropsPostCard } from "../../shared/types";
import { Link } from "react-router-dom";
import {  useContext, useState } from "react";
import { useLikeOrUnlike } from "../../hooks/use-like";
import { TranslationContext } from "../../context/lozalization-context";

const Profile = ICONS.profile

export function PostCard(props: IPropsPostCard){
    const post = props.post;    
    const [ likesCount, setCountLikes ] = useState<number>(post.likes.length)
    function setLikes(likesCount: number){
        setCountLikes(likesCount)
    }
    const { checkLikes, isLiked} = useLikeOrUnlike(post.id, setLikes, likesCount)
    const LikeIcon = isLiked ? ICONS.filledLike : ICONS.like;
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return  <div className={style.post}>
        <div className={style.postHat}>
            <div className={style.postAuthor}>
                <Profile className={style.postAuthorAvatar}></Profile>
                <h1 className={style.postAuthorName}>{post.createdBy.name}</h1>
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
                <LikeIcon className = {style.likeIcon} onClick = {checkLikes}></LikeIcon>
                <h1 className={style.goToPost}>{likesCount}</h1>
                <Link to={`/posts/${post.id}`}>
                    <h1 className={style.goToPost}>{translate("goToPostButton")}</h1>
                </Link>
            </div>
        </div>
    </div>
}