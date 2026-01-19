import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./app/layout/layout"
import { AllPosts } from "./pages"
import { PostPage } from "./pages/post-page/post-page"
import { PostContextProvider } from "./context/postContext"
import { TranslationContextProvider } from "./context/localizationContext"

export function App(){
    return (
       <PostContextProvider>
            <TranslationContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path = "/" element = {<Layout/>}></Route>
                        <Route path = "/posts" element = {<AllPosts/>}></Route>
                        <Route path = "/posts/:postId/" element={<PostPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </TranslationContextProvider>
        </PostContextProvider>
    )
}