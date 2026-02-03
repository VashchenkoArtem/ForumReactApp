import { useContext } from "react"
import { UserContext } from "../context/user-context"
import { IUpdateForm } from "../pages/profile-page/profile-page.types"

export function useUpdateUser(){
    const userContext = useContext(UserContext)
    if (!userContext) return {updateUser: () => {}}
    const { token } = userContext
    async function updateUser(content: IUpdateForm){
        try{
            const response = await fetch("http://127.0.0.1:8000/users/update",{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(content)
            })
        }catch(error){
            console.log(error)
        }
    }
    return { updateUser }
}