import { useEffect, useState } from "react"
import { useAddLike } from "./use-add-like"
import { useRemoveLike } from "./use-remove-like"

export function useLikeOrUnlike(postId: number, setLikesCount: (likesCount: number) => void, likesCount: number) {
    const [ isLiked, setLike ] = useState<boolean | null>(null)
    const { addLike } = useAddLike(postId)
    const { removeLike } = useRemoveLike(postId)
    console.log(isLiked)
    const checkLikes = () =>{
        if (isLiked){
            removeLike();
            setLike(false);
            setLikesCount(likesCount - 1)
            console.log("unlike")
        }else{
            addLike();
            setLike(true);
            setLikesCount(likesCount + 1)
            console.log("like")
        }
    }
    useEffect(()=>{
        async function likeOrUnlike () {
            try {
            const response = await fetch(
                 `http://127.0.0.1:8000/posts/${postId}/checkLikes`,
                {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzY3NTIwODM5LCJleHAiOjE3NjgxMjU2Mzl9.Mrxa0v9aI4HUv-VIjWrWyQCpxwDWesGEziOwdNm8wjU"
                }
                }
            )
            if (!response.ok) {
                const text = await response.text()
                console.error("Server error:", text)
                }
            const result = await response.json()
            setLike(result)
            } catch (error) {
                console.error(error)
                throw error
            }
        }
        likeOrUnlike()
    }, [])


    return { checkLikes, isLiked }
}
