import style from "./postListstyle.module.css"
import hat_profile from "./images/hat_profile.svg"
import like_icon from "./images/like.svg"
import { IPropsPostCard } from "./types"


export function PostCard(props: IPropsPostCard){
    const post = props.post;
    return  <div className={style.post}>
        <div className={style.postHat}>
            <div className={style.postAuthor}>
                <img src={hat_profile} className = {style.postAuthorAvatar} alt=""/>
                <h1 className={style.postAuthorName}>{post.userId}</h1>
            </div>
            <div className = {style.line}></div>
        </div>
        <div className={style.postMainContent}>
            <h1 className={style.postTitle}>{post.title}</h1>
            <h1 className = {style.postContent}>{post.description}</h1>
            <div className={style.postTags}>
                {post.tags.map((tag) => {
                return <div className={style.postTag}>
                    <h1 className={style.postTagTitle}>{tag.name}</h1>
                </div>  
                })}
            </div>
            <div className={style.likeAndGoToPost}>
                <img src={like_icon} alt="" className = {style.likeIcon}/>
                <h1 className={style.goToPost}>Перейти до посту</h1>
            </div>
        </div>
    </div>
}