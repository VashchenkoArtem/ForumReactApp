import { useState } from "react"

export function useAddLike(postId: number) {
    async function addLike () {
        try {
        const response = await fetch(
            `http://127.0.0.1:8000/posts/${postId}/likes`,
            {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzY4Mzk0NTA2LCJleHAiOjE3Njg5OTkzMDZ9.khJ9xXEoucybxdBx_-GCcaiPu8c8wnvcuCR8RRarijY"
            }
            }
        )
        const result = await response.json()
        if (!response.ok) {
            const text = await response.text()
            console.error("Server error:", text)
            }
        
        } catch (error) {
        console.error(error)
        }
    }

    return { addLike }
}
