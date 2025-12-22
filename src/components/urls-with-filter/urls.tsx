import { Urls } from "../../app/urls"
import { IUrlsProps } from "../../shared/types/urls"
import { Filter } from "../filter"


export function UrlsWithFilter(props: IUrlsProps){
    const { tags, setInputLikes, setInputTags, inputTags } = props
    return (
        <Urls>
            <Filter setInputLikes={setInputLikes} setInputTags={setInputTags} tags = {tags} inputTags={inputTags}></Filter>
        </Urls>
    )
}