import style from "../all-posts/all-posts.module.css"
import { useEffect, useState } from "react";
import { IPost, ITag } from "../../shared/types";
import { HeaderWithInput } from "../../components/header-with-input";
import { UrlsWithFilter } from "../../components/urls-with-filter";
import { PostListWithFilter } from "../../components/post-list-with-filters";
import { usePostsAndTags } from "../../hooks/use-posts-and-tags";
import { MoonLoader } from "react-spinners";
import { useWindowWidth } from "@react-hook/window-size";
import { Filter } from "../../components/filter";
import { Urls } from "../../app/urls";

 
export function AllPosts(){
    const productsAndTags = usePostsAndTags()
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
    const [ inputLikes, setInputLikes ] = useState<number>(-1)
    const [ inputTags, setInputTags ] = useState<string[]>([])
    const [ inputData, setInputData] = useState<string>("")
    function setPosts(posts: IPost[]){
        setFilteredPosts(posts)
    }
    const screenWidth = useWindowWidth()
    const { unfilteredPosts, setUnfilteredPosts, tags, setTags, loading } = productsAndTags
    if (loading){
        return (
            <div className = {style.bodyPage}>
                <HeaderWithInput inputData={inputData} setInputData={setInputData}></HeaderWithInput>
                <main className={style.pageMainWithSpinner}>
                    <UrlsWithFilter  tags = {tags} setInputLikes={setInputLikes} inputTags={inputTags} setInputTags={setInputTags}/>
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
    if (screenWidth < 767 && !loading){
        return (
            <div className = {style.bodyPage}>
                <HeaderWithInput inputData={inputData} setInputData={setInputData}></HeaderWithInput>
                <main className={style.pageMain}>
                    <Urls></Urls>
                    <div className = {style.postsWithFilter}>
                        <Filter tags = {tags} setInputLikes={setInputLikes} inputTags={inputTags} setInputTags={setInputTags}/>
                        <PostListWithFilter unfilteredPosts = {unfilteredPosts} inputLikes = {inputLikes} inputTags={inputTags} setFilteredPosts={setPosts} inputData={inputData} filteredPosts = {filteredPosts}/>
                    </div>
                </main>
            </div>
        )
    }
    return (
        <div className = {style.bodyPage}>
            <HeaderWithInput inputData={inputData} setInputData={setInputData}></HeaderWithInput>
            <main className={style.pageMain}>
                <UrlsWithFilter  tags = {tags} setInputLikes={setInputLikes} inputTags={inputTags} setInputTags={setInputTags}/>
                <PostListWithFilter unfilteredPosts = {unfilteredPosts} inputLikes = {inputLikes} inputTags={inputTags} setFilteredPosts={setPosts} inputData={inputData} filteredPosts = {filteredPosts}/>
            </main>
        </div>
    )
}