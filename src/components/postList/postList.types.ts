import { IPost, ITag } from "../postCard/postCard.types";

export interface IProps {
    posts: IPost[],
    tags: ITag[]
}