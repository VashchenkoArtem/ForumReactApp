import { ITag } from "./post";

export interface IUrlsProps{
    tags: ITag[],
    setInputLikes: (inputLikes: number) => void,
    setInputTags: (inputTags: string[]) => void,
    inputTags: string[]
}