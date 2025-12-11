import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/layout"
import { AllPosts } from "./pages/all-posts-page/all-posts"


export function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout/>}>
                    <Route path = "/posts" element = {<AllPosts></AllPosts>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}