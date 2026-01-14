import { useState } from "react"
import { IForm, ITag } from "../shared"

export function useCreatePost(){
    async function createPost(form:IForm){
        try{
            console.log(form)
            const response = await fetch(`http://127.0.0.1:8000/posts`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzY4Mzk0NTA2LCJleHAiOjE3Njg5OTkzMDZ9.khJ9xXEoucybxdBx_-GCcaiPu8c8wnvcuCR8RRarijY"
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