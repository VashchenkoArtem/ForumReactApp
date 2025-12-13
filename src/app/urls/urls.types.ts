import { ReactNode } from "react";
import { IPost } from "../postCard/postCard.types";

export interface IProps{
    children: ReactNode,
    setFilteredPosts: (posts: IPost[]) => void
}