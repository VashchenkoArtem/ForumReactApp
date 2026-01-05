import { ICONS } from "../../shared";
import style from "./postCard.module.css"
import { IPropsPostCard } from "../../shared/types";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import  'react-quill-new/dist/quill.snow.css'
import { useLikeOrUnlike } from "../../hooks/use-like";
import { useState } from "react";
import { useAddComment } from "../../hooks/use-add-comment";

const Profile = ICONS.profile
const LikeIcon = ICONS.like

export function PostCardWithComments(props: IPropsPostCard){
    const post = props.post;    
    const [comment, setComment] = useState<string>("")
    const [ likesCount, setCountLikes ] = useState<number>(post.likes.length)
    function setLikes(likesCount: number){
        setCountLikes(likesCount)
    }
    const { addComment } = useAddComment(post.id,comment)
    const { checkLikes, isLiked} = useLikeOrUnlike(post.id, setLikes, likesCount)
    const LikeIcon = isLiked ? ICONS.filledLike : ICONS.like;
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
                <LikeIcon className = {style.likeIcon} onClick = {checkLikes}></LikeIcon>
                <h1 className={style.goToPost}>{post.likes?.length}</h1>
            </div>
            <div className = {style.postComments}>
                {post.comments?.map((comment) => {
                    return (
                    <div key = {comment.id} className = {style.comment}>
                        <h1 className = {style.commentAuthor}>{comment.author.firstName} {comment.author.secondName}</h1>
                        <h1 className = {style.commentBody}>{comment.content}</h1>
                    </div>
                    )
                })}
            </div>
            <ReactQuill 
            placeholder="Залишити коментар" 
            className = {style.reactQuill} 
            theme = "snow"
            value = {comment}
            onChange={(event)=>{
                setComment(event.split(">")[1].split("<")[0])
            }}
            ></ReactQuill>
            <h1 onClick={addComment}>Відправити</h1>
        </div>
    </div>
}