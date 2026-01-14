export function useRemoveLike(postId: number) {
    async function removeLike () {
        try {
        const response = await fetch(
            `http://127.0.0.1:8000/posts/${postId}/likes`,
            {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzY4Mzk0NTA2LCJleHAiOjE3Njg5OTkzMDZ9.khJ9xXEoucybxdBx_-GCcaiPu8c8wnvcuCR8RRarijY"
            }
            }
        )
        if (!response.ok) {
            const text = await response.text()
            console.error("Server error:", text)
            }
        
        } catch (error) {
            console.error(error)
        }
    }

    return { removeLike }
}
