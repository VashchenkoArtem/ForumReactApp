export function useRemoveLike(postId: number) {
    async function removeLike () {
        try {
        const response = await fetch(
            `http://127.0.0.1:8000/posts/${postId}/likes`,
            {
            method: "DELETE",
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
        
        } catch (error) {
        console.error(error)
        throw error
        }
    }

    return { removeLike }
}
