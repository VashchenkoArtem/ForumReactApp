import { IPost, ITag } from "../postCard/postCard.types"

export interface IProps{
    tags: ITag[],
    setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}