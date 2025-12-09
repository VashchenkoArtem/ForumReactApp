import { ReactNode } from "react";
import { IPost } from "../postCard/postCard.types";

export interface IMainProps{
    children: ReactNode,
    setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}