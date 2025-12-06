import style from "./filter.module.css"
import { ReactComponent as ArrowUp } from "../../assets/icons/arrowUp.svg"
import { IProps } from "./filter.types"


export function Filter(props: IProps){
    const { tags } = props
    return (
        <div className={style.filter}>
            <div className={style.titleFilterContainer}>
                <h1 className={style.titleFilter}>Фільтр</h1>
                <ArrowUp className={style.titleArrow}></ArrowUp>
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
    )
}