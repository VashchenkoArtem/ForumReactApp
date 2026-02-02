import style from "../all-posts/all-posts.module.css"
import { useContext } from "react";
import { HeaderWithInput } from "../../components/header-with-input";
import { UrlsWithFilter } from "../../components/urls-with-filter";
import { PostListWithFilter } from "../../components/post-list-with-filters";
import { MoonLoader } from "react-spinners";
import { useWindowWidth } from "@react-hook/window-size";
import { Filter } from "../../components/filter";
import { Urls } from "../../app/urls";
import { PostContext } from "../../context/post-context";
import { TranslationContext } from "../../context/lozalization-context";
 
export function AllPosts(){
    const context = useContext(PostContext)
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