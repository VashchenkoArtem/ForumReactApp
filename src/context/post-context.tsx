import { createContext, ReactNode, useState } from "react";
import { IPost, ITag } from "../shared";
import { usePosts } from "../hooks/use-posts";
import { useTags } from "../hooks/use-tags";

interface IPostContext{
    unfilteredPosts: IPost[];
    setItems: (posts: IPost[]) => void;
    filteredItems: IPost[];
    inputData: string;
    inputLikes: number;
    inputTags: string[];
    setInputLikes: (likes: number) => void
    setInputTags: (tags: string[]) => void
    setInputData: (data: string) => void
    loading: boolean | undefined
    tags: ITag[]
}
export const PostContext = createContext<IPostContext | null>(null)

interface IPostContextProviderProps{
    children: ReactNode
}

export function PostContextProvider(props: IPostContextProviderProps){
    const { children } = props
    const [ filteredItems, setFilteredItems] = useState<IPost[]>([])
    const [ inputLikes, setInputLikes ] = useState<number>(-1)
    const [ inputTags, setInputTags ] = useState<string[]>([])
    const [ inputData, setInputData] = useState<string>("")
    const { unfilteredPosts, loading } = usePosts()
    const { tags, setTags } = useTags()
    function setItems(posts: IPost[]){
        setFilteredItems(posts)
    }
    return (
        <PostContext value = {{unfilteredPosts, filteredItems, inputLikes, inputTags, inputData, setItems, setInputLikes, setInputData, setInputTags, loading, tags}}>
            {children}
        </PostContext>
    )
}