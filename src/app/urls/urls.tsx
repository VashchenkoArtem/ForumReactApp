import style from "./urls.module.css"
import { IProps } from "./urls.types"
import { Link } from "react-router-dom"



export function Urls(props: IProps){
    const { children } = props
    return (
        <div className={style.mainUrls}>
            <div className={style.urls}>
                <Link to = "/">
                    <div className={style.mainUrl}>
                        <h1 className={style.mainUrlTitle}>Головна</h1>
                    </div>
                </Link>
                <Link to = "/posts">
                    <div className={style.allPostsUrl}>
                        <h1 className={style.urlTitle}>Пости</h1>
                    </div>
                </Link>
                <div className={style.createUrl}>
                    <h1 className={style.urlTitle}>Створити</h1>
                </div>
                <div className={style.aboutUsUrl}>
                    <h1 className={style.urlTitle}>Про нас</h1>
                </div>
                <div className={style.languageUrl}>
                    <h1 className={style.urlTitle}>Мова</h1>
                </div>
            </div>
            { children }
        </div>
    )
}