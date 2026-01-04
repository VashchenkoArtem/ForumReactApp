import { useEffect, useState } from "react";
import { IPost } from "../shared/types";

export function usePost(postId: string | undefined){
    const [error, setError] = useState<string>("");
    const [post, setPost] = useState<IPost>();
    if (!postId){
        setError("Please, enter a correct number in parameters!");
    }
    useEffect(()=>{
        async function getPost(){
            try{
                const response = await fetch(`http://127.0.0.1:8000/posts/${postId}?include=likedBy&include=comments`);
                const result = await response.json();

                if (response.status === 404){
                    setError("Please, enter a correct number in parameters!");
                }
                else {
                    setPost(result);
                }
            }catch(error){
                console.log(error)
            }
        }
        getPost();
    },[postId]
)
    return {error, post}
}