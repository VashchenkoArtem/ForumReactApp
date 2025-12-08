import { IPost } from "../postCard/postCard.types"

export interface IProps{
    setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}