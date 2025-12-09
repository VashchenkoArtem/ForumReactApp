import style from "./urls.module.css"
import { Filter } from "../filter/filter"
import { IPost } from "../postCard/postCard.types"

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

export function Urls(props: {setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>}){
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
            <Filter setFilteredPosts={props.setFilteredPosts} tags = {tagsList}></Filter>
        </div>
    )
}