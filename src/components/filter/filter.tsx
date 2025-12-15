import style from "./filter.module.css"
import { IProps } from "./filter.types"
import { useEffect, useState } from "react"
import { ICONS } from "../../shared"
import { AllPosts } from "../../pages"
import { postsList } from "../input"

const ArrowUp = ICONS.arrowUp
export function Filter(props: IProps){
    const [ inputLikes, setInputLikes ] = useState<number>(-1)
    const [ inputTags, setInputTags ] = useState<string>("")
    const { tags, setFilteredPosts, filteredPosts } = props

    useEffect(()=>{ 
        setFilteredPosts(postsList.filter((post)=>{
             return post.likes > inputLikes })) 
            }, [inputLikes]) 
    useEffect(() => { 
        if (inputTags){
            setFilteredPosts( postsList.filter((post) => 
                post.tags.some((tag) => tag.name === inputTags)
        ))  
        }
}, [inputTags])
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
                        value= "0" 
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
                        value= "-1"
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
                                        const input = event.target.value;
                                        setInputTags(input)
                                    }}/>
                                    <label className={style.filterLabel} htmlFor={"tag" + tag.id}>{tag.name}</label>
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}