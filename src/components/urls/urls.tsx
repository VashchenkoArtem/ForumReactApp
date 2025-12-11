import style from "./urls.module.css"
import { Filter } from "../filter/filter"
import { IPost } from "../postCard/postCard.types"
import { IProps } from "./urls.types"
import { Link } from "react-router-dom"



export function Urls(props: IProps){
    const { setFilteredPosts, children} = props
    return (
        <div className={style.mainUrls}>
            <div className={style.urls}>
                <Link to = {"/"} className = {style.urlTag}>
                    <div className={style.mainUrl}>
                        <a className={style.mainUrlTitle}>Головна</a>
                    </div>
                </Link>
                <Link to = {"/posts"} className = {style.urlTag}>
                    <div className={style.allPostsUrl}>
                        <a className={style.urlTitle}>Пости</a>
                    </div>
                </Link>
                <div className={style.createUrl}>
                    <a className={style.urlTitle}>Створити</a>
                </div>
                <div className={style.aboutUsUrl}>
                    <a className={style.urlTitle}>Про нас</a>
                </div>
                <div className={style.languageUrl}>
                    <a className={style.urlTitle}>Мова</a>
                </div>
            </div>
            { children }
        </div>
    )
}