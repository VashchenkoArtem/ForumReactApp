import seacrh_icon from "./images/search_icon.svg"
import style from "./main.module.css"
import { PostList } from "./postList"

const productList = [
    {
        id: 0,
        title: "First Post",
        description: "My first post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }]
    },
    {
        id: 1,
        title: "Second Post",
        description: "My second post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }]
    },
    {
        id: 2,
        title: "Third Post",
        description: "My third post",
        image: "image.png",
        userId: 2,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }]
    },
    {
        id: 3,
        title: "Forth Post",
        description: "My forth post",
        image: "image.png",
        userId: 4,
        tags: [{
            id: 0,
            name: "#перший_пост"
        }]
    }
]

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
                <PostList products = {productList} tags = {tagsList}></PostList>
            </div>
        </div>
    )
}