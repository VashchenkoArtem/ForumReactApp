import hat_profile from "./images/hat_profile.svg"
import like_icon from "./images/like.svg"
import style from "./postListstyle.module.css"
import { IProps } from "./types"
import arrow_up from "./images/arrow_up.svg"


export function PostList(props: IProps){
    const products  = props.products;
    const tags = props.tags;
    return (
        <div className={style.posts}>
            <div className={style.filter}>
                <div className={style.titleFilterContainer}>
                    <h1 className={style.titleFilter}>Фільтр</h1>
                    <img className={style.titleArrow} src={arrow_up} alt="" />
                </div>
                <div className={style.filterContainer}>
                    <h1 className={style.filterTitle}>Лайки</h1>
                    <div className={style.containerButtons}>
                        <div className={style.containerButton}>
                            <input className={style.inputButton}type="radio" value="moreThan100Likes" name="likesFilter" id="likes100" />
                            <label className={style.filterLabel} htmlFor="likes100">Більше 100 лайків</label>
                        </div>

                        <div className={style.containerButton}>
                            <input className={style.inputButton}type="radio" value="moreThan50Likes" name="likesFilter" id="likes50" />
                            <label className={style.filterLabel} htmlFor="likes50">Більше 50 лайків</label>
                        </div>

                        <div className={style.containerButton}>
                            <input className={style.inputButton}type="radio" value="moreThan0Likes" name="likesFilter" id="likesMoreThan0" />
                            <label className={style.filterLabel} htmlFor="likesMoreThan0">Більше 0 лайків</label>
                        </div>

                        <div className={style.containerButton}>
                            <input className={style.inputButton}type="radio" value="zeroLikes" name="likesFilter" id="likes0" />
                            <label className={style.filterLabel} htmlFor="likes0">0 лайків</label>
                        </div>
                    </div>

                </div>
                <div className={style.filterContainer}>
                    <h1 className={style.filterTitle}>Теги</h1>
                    <div className={style.containerButtons}>
                        { tags.map((tag) => {
                            return <div className={style.containerButton}>
                                        <input className={style.inputButton}type="checkbox" name = "tag" id = {"tag" + tag.id}/>
                                        <label className={style.filterLabel} htmlFor={"tag" + tag.id}>{tag.name}</label>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
            { products.map((post) => {
                return <div className={style.post}>
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
            })}
        </div>
    )
}