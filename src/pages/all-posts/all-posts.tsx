import style from "../all-posts/all-posts.module.css"
import { useContext, useEffect, useState } from "react";
import { IPost, ITag } from "../../shared/types";
import { HeaderWithInput } from "../../components/header-with-input";
import { UrlsWithFilter } from "../../components/urls-with-filter";
import { PostListWithFilter } from "../../components/post-list-with-filters";
import { usePosts } from "../../hooks/use-posts";
import { MoonLoader } from "react-spinners";
import { useWindowWidth } from "@react-hook/window-size";
import { Filter } from "../../components/filter";
import { Urls } from "../../app/urls";
import { useTags } from "../../hooks/use-tags";
import { PostContext } from "../../context/post-context";

 
export function AllPosts(){
    const context = useContext(PostContext)
    // const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
    // const [ inputLikes, setInputLikes ] = useState<number>(-1)
    // const [ inputTags, setInputTags ] = useState<string[]>([])
    // const [ inputData, setInputData] = useState<string>("")
    function setPosts(posts: IPost[]){
        context?.setItems(posts)
    }
    const screenWidth = useWindowWidth()
    // const { unfilteredPosts, loading } = usePosts()
    if (context?.loading){
        return (
            <div className = {style.bodyPage}>
                <HeaderWithInput></HeaderWithInput>
                <main className={style.pageMainWithSpinner}>
                    <UrlsWithFilter/>
                    <MoonLoader
                    color="#0338bc"
                    cssOverride={{}}
                    loading
                    size={40}
                    speedMultiplier={1}
                    />
                </main>
            </div>
        )
    }
    if (screenWidth < 767 && !context?.loading){
        return (
            <div className = {style.bodyPage}>
                <HeaderWithInput></HeaderWithInput>
                <main className={style.pageMain}>
                    <Urls></Urls>
                    <div className = {style.postsWithFilter}>
                        <Filter/>
                        <PostListWithFilter/>
                    </div>
                </main>
            </div>
        )
    }
    return (
        <div className = {style.bodyPage}>
            <HeaderWithInput></HeaderWithInput>
            <main className={style.pageMain}>
                <UrlsWithFilter/>
                <PostListWithFilter/>
            </main>
        </div>
    )
}