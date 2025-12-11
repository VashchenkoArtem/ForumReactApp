import { ReactNode } from "react";
import { IPost } from "../postCard/postCard.types";

export interface IProps{
    children: ReactNode,
    setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}