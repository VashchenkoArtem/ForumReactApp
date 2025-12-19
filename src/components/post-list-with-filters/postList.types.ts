import { IPost } from "../../app/postCard/postCard.types";


export interface IProps {
    inputData: string,
    setFilteredPosts: (posts: IPost[]) => void,
    filteredPosts: IPost[],
    inputLikes: number;
    inputTags: string;
    unfilteredPosts: IPost[]
}