import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./app/layout/layout"
import { AllPosts } from "./pages"
import { PostPage } from "./pages/post-page/post-page"
import { PostContextProvider } from "./context/post-context"

export function App(){
    return (
       <PostContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Layout/>}></Route>
                    <Route path = "/posts" element = {<AllPosts/>}></Route>
                    <Route path = "/posts/:postId/" element={<PostPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </PostContextProvider>
    )
}