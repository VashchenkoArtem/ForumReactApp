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
                            <h1 className={style.mainUrlTitle}>Головна</h1>
                        </div>
                        <div className={style.url}>
                            <h1 className={style.urlTitle}>Пости</h1>
                        </div>
                        <div className={style.url}>
                            <h1 className={style.urlTitle}>Створити</h1>
                        </div>
                        <div className={style.url}>
                            <h1 className={style.urlTitle}>Про нас</h1>
                        </div>
                        <div className={style.url}>
                            <h1 className={style.urlTitle}>Мова</h1>
                        </div>
                    </div>
                </div>
                <div className="posts">
                    <div className="post">
                        <div className="post-hat">
                            <div className="post-author-hat">
                                <img src={hat_profile} className = "post-author-hat-image" alt=""/>
                                <h1 className="post-author-name">User2</h1>
                            </div>
                            <div className = "line"></div>
                            <div className="post-main-content">
                                <h1 className="post-title">Всім привіт!</h1>
                                <h1 className = "post-content">Нещодавно зареєструвався на цій платформі. Як у вас справи?</h1>
                                <div className="post-tags">
                                    <div className="post-tag">
                                        <h1 className="post-tag-title">#перший_вхід</h1>
                                    </div>
                                </div>
                                <div className="like-and-go-to-post">
                                    <img src={like_icon} alt="" className = "like-icon"/>
                                    <h1 className="go-to-post">Перейти до посту</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}