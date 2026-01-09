import { IComments } from "../shared/types/post"

export function useAddComment(postId: number, content: string, setComments: (comemnts: IComments[]) => void, comments: IComments[]){
    async function addComment(){
        try{
            const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/comments`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzY3NTIwODM5LCJleHAiOjE3NjgxMjU2Mzl9.Mrxa0v9aI4HUv-VIjWrWyQCpxwDWesGEziOwdNm8wjU"
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