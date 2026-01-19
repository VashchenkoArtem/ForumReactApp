import style from "./urls.module.css"
import { IProps } from "./urls.types"
import { Link } from "react-router-dom"
import {useWindowWidth} from '@react-hook/window-size'
import { ICONS } from "../../shared"
import { ChooseLanguage } from "../../components/chooseLanguage"
import { useState } from "react"


export function Urls(props: IProps){
    const { children, setModalOpen } = props
    const screenWidth = useWindowWidth()
    const [ isOpenLanguage, setIsOpenLanguage ] = useState<boolean>(false)
    if (screenWidth > 767){
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
                    <div className={style.createUrl} onClick={(event) => {
                        event.stopPropagation()
                        if (!setModalOpen) return
                        setModalOpen()
				}}>
                        <h1 className={style.urlTitle}>Створити</h1>
                    </div>
                    <div className={style.aboutUsUrl}>
                        <h1 className={style.urlTitle}>Про нас</h1>
                    </div>
                    <div 
                    className={style.languageUrl}
                    onClick={()=>{
                        setIsOpenLanguage(!isOpenLanguage)
                    }}
                    >
                        <h1 className={style.urlTitle}>Мова</h1>
                        <ChooseLanguage isOpenLanguage = {isOpenLanguage} />
                    </div>
                </div>
                { children }
            </div>
        )
    }else{
        return (
            <div className = {style.burgerMenu}>
                <div className={style.urlsPhone}>
                    <Link to = "/">
                        <div className={style.urlPhone}>
                            <ICONS.main></ICONS.main>
                        </div>
                    </Link>
                    <Link to = "/posts">
                        <div className={style.urlPhone}>
                            <ICONS.posts></ICONS.posts>
                        </div>
                    </Link>
                    <div className={style.urlPhone}>
                        <ICONS.create></ICONS.create>
                    </div>
                    <div className={style.urlPhone}>
                        <ICONS.about></ICONS.about>
                    </div>
                    <div className={style.urlPhoneLanguage}>
                        <ICONS.language></ICONS.language>
                    </div>
                </div>
                { children }
            </div>
        )
    }
}
