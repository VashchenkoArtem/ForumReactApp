import { useEffect, useState } from "react"
import { IPost, ITag } from "../shared/types"

export function useTags(){
    const [ tags, setTags ] = useState<ITag[]>([])
    useEffect(()=>{
        async function getAllTags(){
            try{
                // setLoading(true)
                const response = await fetch("http://localhost:8000/tags")
                const allTags = await response.json()
                setTags(allTags)
            }catch(error){
                console.log(error)
            }finally{
                // setLoading(false)
            }
        }
        getAllTags()
    },[])
    return {
            tags: tags,
            setTags: setTags
    }
}