export function useRemoveLike(postId: number) {
    async function removeLike (token: string) {
        try {
        const response = await fetch(
            `http://127.0.0.1:8000/posts/${postId}/likes`,
            {
            method: "DELETE",
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
        
        } catch (error) {
            console.error(error)
        }
    }

    return { removeLike }
}
