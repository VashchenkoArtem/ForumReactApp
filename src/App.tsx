import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./app/layout/layout"
import { AllPosts } from "./pages"

export function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout/>}></Route>
                <Route path = "/posts" element = {<AllPosts/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}