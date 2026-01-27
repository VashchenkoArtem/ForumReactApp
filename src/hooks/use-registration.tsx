import { IRegistrationForm } from "../pages/registration/registration.types"

export function useRegistration(){
    async function registerUser(data: IRegistrationForm){
        if (data.password !== data.confirmPassword){
            alert("Passwords do not match")
            return
        }
        const dataWithoutConfirmPassword = { 
            name: data.name,
            avatar: data.avatar,
            email: data.email,
            password: data.password
        }
        try{
            const response = await fetch("http://localhost:8000/users/registration",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataWithoutConfirmPassword),
            })
        }catch(error){
            console.log(error)
        }
    }
    return { registerUser}
}