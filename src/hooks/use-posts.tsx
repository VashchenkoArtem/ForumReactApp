import { useEffect, useState } from "react"
import { IPost, ITag } from "../shared/types"

export function usePosts(){
    const [ unfilteredPosts, setUnfilteredPosts] = useState<IPost[]>([])
    const [ loading, setLoading ] = useState<boolean>()
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
        getAllPosts()
    },[])
    return {unfilteredPosts: unfilteredPosts,
            setUnfilteredPosts: setUnfilteredPosts,
            loading
    }
}