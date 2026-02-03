import { useContext } from "react"
import { IComments } from "../shared/types/post"
import { UserContext } from "../context/user-context"

export function useAddComment(postId: number, content: string, setComments: (comemnts: IComments[]) => void, comments: IComments[]){
    const userContext = useContext(UserContext)
    if (!userContext) return {result: "error"}
    const { token } = userContext
    async function addComment(){
        try{
            const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/comments`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({content: content})})
            const result = await response.json()
            const newCommentsArray = [ ...comments, result]
            setComments(newCommentsArray)
        }catch(error){
            console.log(error)
        }
    }
    return {addComment}
}