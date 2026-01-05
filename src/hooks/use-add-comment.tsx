export function useAddComment(postId: number, content: string){
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
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }
    return {addComment}
}