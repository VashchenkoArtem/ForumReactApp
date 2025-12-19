import { Filter } from "../../components/filter/filter";
import { Urls } from "../../app/urls";
import { PostList } from "../../app/postList";
import style from "../all-posts/all-posts.module.css"
import { use, useEffect, useState } from "react";
import { IPost, ITag } from "../../app/postCard/postCard.types";
import { HeaderWithInput } from "../../components/header-with-input";
import { UrlsWithFilter } from "../../components/urls-with-filter";
import { PostListWithFilter } from "../../components/post-list-with-filters";

 
export function AllPosts(){
    const [ unfilteredPosts, setUnfilteredPosts] = useState<IPost[]>([])
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
    const [ inputLikes, setInputLikes ] = useState<number>(-1)
    const [ inputTags, setInputTags ] = useState<string>("")
    const [ inputData, setInputData] = useState<string>("")
    const [ tags, setTags ] = useState<ITag[]>([])
    function setPosts(posts: IPost[]){
        setFilteredPosts(posts)
    }
    useEffect(()=>{
        async function getAllPosts(){
            try{
                const response = await fetch("http://localhost:8000/posts")
                const allPosts = await response.json()
                setUnfilteredPosts(allPosts)
            }catch(error){
                console.log(error)
            }
        }
        async function getAllTags(){
            try{
                const response = await fetch("http://localhost:8000/tags")
                const allTags = await response.json()
                setTags(allTags)
            }catch(error){
                throw error
            }
        }
        getAllPosts()
        getAllTags()
    },[])
    return (
        <div className = {style.bodyPage}>
            <HeaderWithInput inputData={inputData} setInputData={setInputData}></HeaderWithInput>
            <main className={style.pageMain}>
                <UrlsWithFilter  tags = {tags} setInputLikes={setInputLikes} setInputTags={setInputTags}/>
                <PostListWithFilter unfilteredPosts = {unfilteredPosts} inputLikes = {inputLikes} inputTags={inputTags} setFilteredPosts={setPosts} inputData={inputData} filteredPosts = {filteredPosts}/>
            </main>
        </div>
    )
}