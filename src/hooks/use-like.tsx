import { useContext, useEffect, useState } from "react"
import { useAddLike } from "./use-add-like"
import { useRemoveLike } from "./use-remove-like"
import { UserContext } from "../context/user-context"

export function useLikeOrUnlike(
    postId: number, 
    setLikesCount: (likesCount: number) => void, 
    likesCount: number
) {
    const [isLiked, setLike] = useState<boolean | null>(null)

    const { addLike } = useAddLike(postId)
    const { removeLike } = useRemoveLike(postId)

    const userContext = useContext(UserContext)

    useEffect(() => {
        if (!userContext) return

        const { token } = userContext
        async function likeOrUnlike() {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/posts/${postId}/checkLikes`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
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
            }
        }

        likeOrUnlike()
    }, [postId, userContext])
    if (!addLike || !removeLike || !userContext) {
        return { checkLikes: () => {}, isLiked: null }
    }
    const { token } = userContext
    if (!token){
        return { checkLikes: () => {}, isLiked: null}
    }
    const checkLikes = () => {
        if (isLiked) {
            removeLike(token)
            setLike(false)
            setLikesCount(likesCount - 1)
        } else {
            addLike(token)
            setLike(true)
            setLikesCount(likesCount + 1)
        }
    }

    return { checkLikes, isLiked }
}
