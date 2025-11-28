import hat_profile from "./images/hat_profile.svg"
import seacrh_icon from "./images/search_icon.svg"
import like_icon from "./images/like.svg"
import style from "./main.module.css"


export function Main(){
    return (
        <div className = {style.bodyPage}>
            <div className = {style.pageHat}>
                <h1 className = {style.hatLogo}>LOGO</h1>
                <div className = {style.hatInputContainer}>
                    <img src = {seacrh_icon} alt="" className = {style.searchImage}/>
                    <input type="text" className = {style.inputSearch} placeholder="Знайти пост"/>
                </div>
                <div className = {style.hatProfile}>
                    <h1 className = {style.enterToAccount}>Увійти</h1>
                </div>
            </div>
            <div className={style.pageMain}>
                <div className={style.mainUrls}>
                    <div className={style.urls}>
                        <div className={style.mainUrl}>
                            <a className={style.mainUrlTitle}>Головна</a>
                        </div>
                        <div className={style.url}>
                            <a className={style.urlTitle}>Пости</a>
                        </div>
                        <div className={style.url}>
                            <a className={style.urlTitle}>Створити</a>
                        </div>
                        <div className={style.url}>
                            <a className={style.urlTitle}>Про нас</a>
                        </div>
                        <div className={style.url}>
                            <a className={style.urlTitle}>Мова</a>
                        </div>
                    </div>
                </div>
                <div className={style.posts}>
                    <div className={style.post}>
                        <div className={style.postHat}>
                            <div className={style.postAuthor}>
                                <img src={hat_profile} className = {style.postAuthorAvatar} alt=""/>
                                <h1 className={style.postAuthorName}>User2</h1>
                            </div>
                            <div className = {style.line}></div>
                        </div>
                        <div className={style.postMainContent}>
                            <h1 className={style.postTitle}>Всім привіт!</h1>
                            <h1 className = {style.postContent}>Нещодавно зареєструвався на цій платформі. Як у вас справи?</h1>
                            <div className={style.postTags}>
                                <div className={style.postTag}>
                                    <h1 className={style.postTagTitle}>#перший_вхід</h1>
                                </div>
                            </div>
                            <div className={style.likeAndGoToPost}>
                                <img src={like_icon} alt="" className = {style.likeIcon}/>
                                <h1 className={style.goToPost}>Перейти до посту</h1>
                            </div>
                        </div>
                    </div>
                    <div className={style.post}>
                        <div className={style.postHat}>
                            <div className={style.postAuthor}>
                                <img src={hat_profile} className = {style.postAuthorAvatar} alt=""/>
                                <h1 className={style.postAuthorName}>User2</h1>
                            </div>
                            <div className = {style.line}></div>
                        </div>
                        <div className={style.postMainContent}>
                            <h1 className={style.postTitle}>Всім привіт!</h1>
                            <h1 className = {style.postContent}>Нещодавно зареєструвався на цій платформі. Як у вас справи?</h1>
                            <div className={style.postTags}>
                                <div className={style.postTag}>
                                    <h1 className={style.postTagTitle}>#перший_вхід</h1>
                                </div>
                            </div>
                            <div className={style.likeAndGoToPost}>
                                <img src={like_icon} alt="" className = {style.likeIcon}/>
                                <h1 className={style.goToPost}>Перейти до посту</h1>
                            </div>
                        </div>
                    </div>
                    <div className={style.post}>
                        <div className={style.postHat}>
                            <div className={style.postAuthor}>
                                <img src={hat_profile} className = {style.postAuthorAvatar} alt=""/>
                                <h1 className={style.postAuthorName}>User2</h1>
                            </div>
                            <div className = {style.line}></div>
                        </div>
                        <div className={style.postMainContent}>
                            <h1 className={style.postTitle}>Всім привіт!</h1>
                            <h1 className = {style.postContent}>Нещодавно зареєструвався на цій платформі. Як у вас справи?</h1>
                            <div className={style.postTags}>
                                <div className={style.postTag}>
                                    <h1 className={style.postTagTitle}>#перший_вхід</h1>
                                </div>
                            </div>
                            <div className={style.likeAndGoToPost}>
                                <img src={like_icon} alt="" className = {style.likeIcon}/>
                                <h1 className={style.goToPost}>Перейти до посту</h1>
                            </div>
                        </div>
                    </div>
                    <div className={style.post}>
                        <div className={style.postHat}>
                            <div className={style.postAuthor}>
                                <img src={hat_profile} className = {style.postAuthorAvatar} alt=""/>
                                <h1 className={style.postAuthorName}>User2</h1>
                            </div>
                            <div className = {style.line}></div>
                        </div>
                        <div className={style.postMainContent}>
                            <h1 className={style.postTitle}>Всім привіт!</h1>
                            <h1 className = {style.postContent}>Нещодавно зареєструвався на цій платформі. Як у вас справи?</h1>
                            <div className={style.postTags}>
                                <div className={style.postTag}>
                                    <h1 className={style.postTagTitle}>#перший_вхід</h1>
                                </div>
                            </div>
                            <div className={style.likeAndGoToPost}>
                                <img src={like_icon} alt="" className = {style.likeIcon}/>
                                <h1 className={style.goToPost}>Перейти до посту</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}