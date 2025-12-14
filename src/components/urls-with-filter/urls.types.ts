import { IPost, ITag } from "../../app/postCard/postCard.types";


export interface IProps{
    tags: ITag[]
    setFilteredPosts: (posts: IPost[]) => void,
    filteredPosts: IPost[]
}