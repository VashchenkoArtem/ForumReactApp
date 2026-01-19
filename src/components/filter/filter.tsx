import style from "./filter.module.css"
import { ICONS } from "../../shared"
import { useContext, useState } from "react"
import { PostContext } from "../../context/postContext"
import { TranslationContext } from "../../context/localizationContext"

const ArrowUp = ICONS.arrowUp
export function Filter(){
    const context = useContext(PostContext)
    const [isOpenFilter, setIsClosedFilter] = useState<boolean>(false)
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return (
        <div className={style.filter}>
            <div className={style.titleFilterContainer}>
                <h1 className={style.titleFilter}>{translate("filterButton")}</h1>
                <ArrowUp
                className={`${style.titleArrow} ${!isOpenFilter && style.rotatedArrow}`}
                onClick={()=>{
                    setIsClosedFilter(!isOpenFilter)
                }}
                ></ArrowUp>
            </div>
            { isOpenFilter &&
                <div className={style.filterContainers}>
                    <div className={style.filterContainer}>
                        <h1 className={style.filterTitle}>{translate("filterByLikesTitle")}</h1>
                        <div className={style.containerButtons}>
                            <div className={style.containerButton}>
                                <input className={style.inputButton}type="radio" 
                                    value= "100"
                                    name="likesFilter" 
                                    id="likes100" 
                                    onChange={(event)=>{
                                    const input = Number(event.target.value)
                                    context?.setInputLikes(input)
                                }} />
                                <label className={style.filterLabel} htmlFor="likes100">{translate("filterMoreThan100Likes")}</label>
                            </div>
                            <div className={style.containerButton}>
                                <input className={style.inputButton}type="radio" 
                                value= "50" 
                                name="likesFilter"
                                id="likes50"                         
                                onChange={(event)=>{
                                    const input = Number(event.target.value)
                                    context?.setInputLikes(input)
                                }} />
                                <label className={style.filterLabel} htmlFor="likes50">{translate("filterMoreThan50Likes")}</label>
                            </div>

                            <div className={style.containerButton}>
                                <input className={style.inputButton}type="radio" 
                                value= "0.5" 
                                name="likesFilter" 
                                id="likesMoreThan0"
                                onChange={(event)=>{
                                    const input = Number(event.target.value)
                                    context?.setInputLikes(input)
                                }} />
                                <label className={style.filterLabel} htmlFor="likesMoreThan0">{translate("filterMoreThan0Likes")}</label>
                            </div>

                            <div className={style.containerButton}>
                                <input className={style.inputButton}type="radio" 
                                value= "0"
                                name="likesFilter" 
                                id="likes0" 
                                onChange={(event)=>{
                                    const input = Number(event.target.value)
                                    context?.setInputLikes(input)
                                }} />
                                <label className={style.filterLabel} htmlFor="likes0">{translate("filter0Likes")}</label>
                            </div>
                        </div>

                    </div>
                    <div className={style.filterContainer}>
                        <h1 className={style.filterTitle}>{translate("filterByTagsTitle")}</h1>
                        <div className={style.containerButtons}>
                            { context?.tags.map((tag) => {
                                return <div key = {tag.id} className={style.containerButton}>
                                            <input className={style.inputButton}
                                            type="checkbox" 
                                            name = "tag" 
                                            id = {"tag" + tag.id} 
                                            value={tag.name} 
                                            onChange={(event)=>{
                                                const isChecked = event.target.checked;
                                                if (isChecked){
                                                    context?.setInputTags([...context?.inputTags, tag.name])
                                                }else if (!isChecked){
                                                    context?.setInputTags(context?.inputTags.filter((inputTag) => inputTag !== tag.name))
                                                }
                                            }}/>
                                            <label className={style.filterLabel} htmlFor={"tag" + tag.id}>{tag.name}</label>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}