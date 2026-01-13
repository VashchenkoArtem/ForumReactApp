export function useRemoveLike(postId: number) {
    async function removeLike () {
        try {
        const response = await fetch(
            `http://127.0.0.1:8000/posts/${postId}/likes`,
            {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzY4MjkyODc3LCJleHAiOjE3Njg4OTc2Nzd9.a_FNDtg5miSX4Q2NCpF6y9xLv6sacyD9qRDr53Yh8cc"
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
