import { ICONS } from "../../shared";
import style from "./postCard.module.css"
import { IPropsPostCard } from "./postCard.types"

const Profile = ICONS.profile
const LikeIcon = ICONS.like

export function PostCard(props: IPropsPostCard){
    const post = props.post;
    return  <div className={style.post}>
        <div className={style.postHat}>
            <div className={style.postAuthor}>
                <Profile className={style.postAuthorAvatar}></Profile>
                <h1 className={style.postAuthorName}>{post.userId}</h1>
            </div>
            <div className = {style.line}></div>
        </div>
        <div className={style.postMainContent}>
            <h1 className={style.postTitle}>{post.title}</h1>
            <h1 className = {style.postContent}>{post.description}</h1>
            <div className={style.postTags}>
                {post.tags.map((tag) => {
                    return <div key = {tag.id} className={style.postTag}>
                        <h1 className={style.postTagTitle}>{tag.name}</h1>
                    </div>  
                })}
            </div>
            <div className={style.likeAndGoToPost}>
                <LikeIcon className = {style.likeIcon}></LikeIcon>
                <h1 className={style.goToPost}>Перейти до посту</h1>
            </div>
        </div>
    </div>
}