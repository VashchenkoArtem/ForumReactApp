import { ILoginForm } from "../pages/login/login.types"

export function useLogin(){
    async function loginUser(data: ILoginForm){
        try{
            await fetch("http://localhost:8000/users/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
        }catch(error){
            console.log(error)
        }
    }
    return { loginUser }
}