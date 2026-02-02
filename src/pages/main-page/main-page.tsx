import { useContext } from "react";
import { Urls } from "../../app/urls";
import { PostContext } from "../../context/post-context";
import { PostList } from "../../components/postList";
import styles from "./main-page.module.css"

export function MainPage(){
    const context  = useContext(PostContext)
    if (!context) return null
    const { handleInputFocus} = context
    return (
        <main className={styles.pageMain}>
            <Urls setModalOpen={handleInputFocus}></Urls>
            <PostList></PostList>
        </main>
    )
}