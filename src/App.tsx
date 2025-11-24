import hat_profile from "./images/hat_profile.svg"
import seacrh_icon from "./images/search_icon.svg"
import like_icon from "./images/like.svg"
import "./static/styles/App.css"

export function App(){
    return (
        <div className = "body-page">
            <div className = "page-hat">
                <h1 className = "hat-logo">LOGO</h1>
                <div className = "hat-input-container">
                    <img src = {seacrh_icon} alt="" className = "search-image"/>
                    <input type="text" className = "input-search" placeholder="Знайти пост"/>
                </div>
                <div className = "hat-profile">
                    <h1 className = "enter-to-account">Увійти</h1>
                </div>
            </div>
            <div className="page-main">
                <div className="main-urls">
                    <div className="urls">
                        <div className="url main-url">
                            <h1 className="main-url-title">Головна</h1>
                        </div>
                        <div className="url">
                            <h1 className="url-title">Пости</h1>
                        </div>
                        <div className="url">
                            <h1 className="url-title">Створити</h1>
                        </div>
                        <div className="url">
                            <h1 className="url-title">Про нас</h1>
                        </div>
                        <div className="url">
                            <h1 className="url-title">Мова</h1>
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