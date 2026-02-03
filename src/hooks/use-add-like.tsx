import { useContext, useState } from "react"
import { UserContext } from "../context/user-context"

export function useAddLike(postId: number) {
    async function addLike (token: string) {
        try {
        const response = await fetch(
            `http://127.0.0.1:8000/posts/${postId}/likes`,
            {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
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
