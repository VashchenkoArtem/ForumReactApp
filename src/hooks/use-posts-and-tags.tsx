import { useEffect, useState } from "react"
import { IPost, ITag } from "../shared/types"

export function usePostsAndTags(){
    const [ unfilteredPosts, setUnfilteredPosts] = useState<IPost[]>([])
    const [ tags, setTags ] = useState<ITag[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(()=>{
        async function getAllPosts(){
            try{
                setLoading(true)
                const response = await fetch("http://localhost:8000/posts")
                const allPosts = await response.json()
                setUnfilteredPosts(allPosts)
            }catch(error){
                console.log(error)
            }
            finally{
                setLoading(false)
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
    return {unfilteredPosts: unfilteredPosts,
            setUnfilteredPosts: setUnfilteredPosts,
            tags: tags,
            setTags: setTags,
            loading: loading
    }
}