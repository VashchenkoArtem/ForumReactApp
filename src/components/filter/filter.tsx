import style from "./filter.module.css"
import { ICONS } from "../../shared"
import { IUrlsProps } from "../../shared/types/urls"

const ArrowUp = ICONS.arrowUp
export function Filter(props: IUrlsProps){
    const { tags, setInputLikes, setInputTags, inputTags } = props
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
                        <input className={style.inputButton}type="radio" 
                            value= "100"
                            name="likesFilter" 
                            id="likes100" 
                            onChange={(event)=>{
                            const input = Number(event.target.value)
                            setInputLikes(input)
                        }} />
                        <label className={style.filterLabel} htmlFor="likes100">Більше 100 лайків</label>
                    </div>

                    <div className={style.containerButton}>
                        <input className={style.inputButton}type="radio" 
                        value= "50" 
                        name="likesFilter"
                        id="likes50"                         
                        onChange={(event)=>{
                            const input = Number(event.target.value)
                            setInputLikes(input)
                        }} />
                        <label className={style.filterLabel} htmlFor="likes50">Більше 50 лайків</label>
                    </div>

                    <div className={style.containerButton}>
                        <input className={style.inputButton}type="radio" 
                        value= "0.5" 
                        name="likesFilter" 
                        id="likesMoreThan0"
                        onChange={(event)=>{
                            const input = Number(event.target.value)
                            setInputLikes(input)
                        }} />
                        <label className={style.filterLabel} htmlFor="likesMoreThan0">Більше 0 лайків</label>
                    </div>

                    <div className={style.containerButton}>
                        <input className={style.inputButton}type="radio" 
                        value= "0"
                        name="likesFilter" 
                        id="likes0" 
                        onChange={(event)=>{
                            const input = Number(event.target.value)
                            setInputLikes(input)
                        }} />
                        <label className={style.filterLabel} htmlFor="likes0">0 лайків</label>
                    </div>
                </div>

            </div>
            <div className={style.filterContainer}>
                <h1 className={style.filterTitle}>Теги</h1>
                <div className={style.containerButtons}>
                    { tags.map((tag) => {
                        return <div key = {tag.id} className={style.containerButton}>
                                    <input className={style.inputButton}
                                    type="checkbox" 
                                    name = "tag" 
                                    id = {"tag" + tag.id} 
                                    value={tag.name} 
                                    onChange={(event)=>{
                                        const isChecked = event.target.checked;
                                        if (isChecked){
                                            setInputTags([...inputTags, tag.name])
                                        }else if (!isChecked){
                                            setInputTags(inputTags.filter((inputTag) => inputTag !== tag.name))
                                        }
                                    }}/>
                                    <label className={style.filterLabel} htmlFor={"tag" + tag.id}>{tag.name}</label>
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}