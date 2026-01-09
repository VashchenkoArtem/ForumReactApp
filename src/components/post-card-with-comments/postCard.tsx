import { ICONS } from "../../shared";
import style from "./postCard.module.css"
import { IPropsPostCard } from "../../shared/types";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import  'react-quill-new/dist/quill.snow.css'
import { useLikeOrUnlike } from "../../hooks/use-like";
import { useEffect, useRef, useState } from "react";
import { useAddComment } from "../../hooks/use-add-comment";
import { IComments } from "../../shared/types/post";

const Profile = ICONS.profile
const LikeIcon = ICONS.like

export function PostCardWithComments(props: IPropsPostCard){
    const post = props.post;    
    const [comment, setComment] = useState<string>("")
    const [ comments, setComments ] = useState<IComments[]>(post.comments)
    const [ likesCount, setCountLikes ] = useState<number>(post.likes.length)
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    function setLikes(likesCount: number){
        setCountLikes(likesCount)
    }
    function setCommentsFunc(comments: IComments[]){
        setComments(comments)
    }
    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }, [comments])
    const { addComment } = useAddComment(post.id,comment,setCommentsFunc, comments)
    const { checkLikes, isLiked} = useLikeOrUnlike(post.id, setLikes, likesCount)
    const LikeIcon = isLiked ? ICONS.filledLike : ICONS.like;
    console.log(comments)
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
                {comments.map((comment) => {
                    return (
                    <div key = {comment.id} className = {style.comment}>
                        <h1 className = {style.commentAuthor}>{comment.author.firstName} {comment.author.secondName}</h1>
                        <h1 className = {style.commentBody}>{comment.content}</h1>
                    </div>
                    )
                })}
                <div ref = {messagesEndRef}></div>
            </div>
            <ReactQuill 
            placeholder="Залишити коментар" 
            className = {style.reactQuill} 
            theme = "snow"
            value = {comment}
            onChange={(value) => {
                const div = document.createElement("div");
                div.innerHTML = value;
                const text = div.textContent || "";
                setComment(text)
            }}
            onKeyDown={(button)=>{
                if (button.key === "Enter"){
                    addComment()
                    setComment("")
                }
            }}
            ></ReactQuill>
        </div>
    </div>
}