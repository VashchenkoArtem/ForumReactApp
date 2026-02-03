
import { createContext, ReactNode, useEffect, useState } from "react";
import { IUser } from "../shared";
import { IRegistrationForm } from "../pages/registration/registration.types";
import { ILoginForm } from "../pages/login/login.types";

interface IUserContext {
    token: string | null;
    user: IUser | null;
    registration: (userData: IRegistrationForm) => void;
    login: (userData: ILoginForm) => void
}

export const UserContext = createContext<IUserContext | null>(null)

interface IUserContextProvider {
    children: ReactNode
}

export function UserContextProvider(props: IUserContextProvider){
    const {children} = props
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)
    useEffect(() => {
        setToken(localStorage.getItem("token"))
        async function getMe(){
            try{
                const response = await fetch("http://localhost:8000/users/me", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const result = await response.json()
                setUser(result)
            }catch(error){
                console.log(error)
            }
        }
        getMe()
    }, [token])
    async function registration(data: IRegistrationForm){
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
            const result = await response.json()
            localStorage.setItem("token", result.token)
            setToken(result.token)
        }catch(error){
            console.log(error)
        }
    }
    async function login(data: ILoginForm){
        try{
            const response = await fetch("http://localhost:8000/users/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const result = await response.json()
            localStorage.setItem("token", result.token)
            setToken(result.token)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <UserContext value = {{token, user, registration, login}}>
            {children}
        </UserContext>
    )
}