import { useContext } from "react"
import { Urls } from "../../app/urls"
import { PostContext } from "../../context/post-context"
import { Filter } from "../filter"


export function UrlsWithFilter(){
    return (
        <Urls>
            <Filter></Filter>
        </Urls>
    )
}