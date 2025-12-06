import style from "./urls.module.css"
import { Filter } from "../filter/filter"

const tagsList = [
    {
        id: 0,
        name: "#перший_пост"
    },
    {
        id: 1,
        name: "#вітання"
    }
]

export function Urls(){
    return (
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
            <Filter tags = {tagsList}></Filter>
        </div>
    )
}