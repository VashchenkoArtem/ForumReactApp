import { IPost, ITag } from "../../app/postCard/postCard.types"

export interface IProps{
    tags: ITag[],
    setInputLikes: (inputLikes: number) => void,
    setInputTags: (inputTags: string) => void
}