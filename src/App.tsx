import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./app/layout/layout"
import { AllPosts, LoginPage, ProfilePage } from "./pages"
import { PostPage } from "./pages/post-page/post-page"
import { PostContextProvider } from "./context/post-context"
import { TranslationContextProvider } from "./context/lozalization-context"
import { RegistrationPage, MainPage } from "./pages"
import { UserContextProvider } from "./context/user-context"


export function App(){
    return (
       <PostContextProvider>
            <TranslationContextProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path = "/" element = {<Layout/>}>
                                <Route path = "/" element = {<MainPage/>}></Route>
                                <Route path = "/posts/:postId/" element={<PostPage/>}></Route>
                                <Route path = "/registration/" element = {<RegistrationPage/>}></Route>
                                <Route path = "/login/" element = {<LoginPage/>}></Route>
                                <Route path = "/me" element = {<ProfilePage/>}></Route>
                            </Route>
                            <Route path = "/posts" element = {<AllPosts/>}></Route>
                        </Routes>
                    </BrowserRouter>
                </UserContextProvider>
            </TranslationContextProvider>
        </PostContextProvider>
    )
}