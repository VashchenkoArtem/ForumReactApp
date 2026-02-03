import { useContext, useState } from "react"
import { IForm, ITag } from "../shared"
import { UserContext } from "../context/user-context"

export function useCreatePost(){
    const userContext = useContext(UserContext)
    if (!userContext) return {result: "error"}
    const { token } = userContext
    async function createPost(form:IForm){
        try{
            console.log(form)
            const response = await fetch(`http://127.0.0.1:8000/posts`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(form)
                }
            )
            const result = await response.json()
            return { result }
        }catch(error){
            const result = error
            return {result}
        }
    }
    return {createPost}
}