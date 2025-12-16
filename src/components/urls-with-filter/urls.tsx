import { Urls } from "../../app/urls"
import { Filter } from "../filter"
import style from "./urls.module.css"
import { IProps } from "./urls.types"
import { Link } from "react-router-dom"


export function UrlsWithFilter(props: IProps){
    const { tags, setInputLikes, setInputTags } = props
    return (
        <Urls>
            <Filter setInputLikes={setInputLikes} setInputTags={setInputTags} tags = {tags}></Filter>
        </Urls>
    )
}