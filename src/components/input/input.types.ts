import { IPost } from "../../app/postCard/postCard.types"

export interface IProps{
    filteredPosts: IPost[],
    setFilteredPosts: (posts: IPost[]) => void
}