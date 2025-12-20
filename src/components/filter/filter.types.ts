import { ITag } from "../../shared/types"

export interface IProps{
    tags: ITag[],
    setInputLikes: (inputLikes: number) => void,
    setInputTags: (inputTags: string) => void
}