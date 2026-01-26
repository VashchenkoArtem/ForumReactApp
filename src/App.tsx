import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./app/layout/layout"
import { AllPosts, LoginPage } from "./pages"
import { PostPage } from "./pages/post-page/post-page"
import { PostContextProvider } from "./context/postContext"
import { TranslationContextProvider } from "./context/localizationContext"
import { PostList } from "./components/postList"
import { RegistrationPage, MainPage } from "./pages"

export function App(){
    return (
       <PostContextProvider>
            <TranslationContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path = "/" element = {<Layout/>}>
                            <Route path = "/" element = {<MainPage/>}></Route>
                            <Route path = "/posts/:postId/" element={<PostPage/>}></Route>
                            <Route path = "/registration/" element = {<RegistrationPage/>}></Route>
                            <Route path = "/login/" element = {<LoginPage/>}></Route>
                        </Route>
                        <Route path = "/posts" element = {<AllPosts/>}></Route>
                    </Routes>
                </BrowserRouter>
            </TranslationContextProvider>
        </PostContextProvider>
    )
}