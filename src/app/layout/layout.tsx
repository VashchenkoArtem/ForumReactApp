import styles from "./layout.module.css"
import { Header } from "../header/header"
import { Urls } from "../urls/urls"
import { useState } from "react"
import { MoonLoader } from "react-spinners"
import { PostList } from "../../components/postList"
import { Modal } from "../../shared/"
import { CreatePostForm } from "../../components/create-post"

export function Layout(){
    const [loading, setLoading] = useState<boolean>()
    if (loading){
        return (
            <div className = {styles.bodyPage}>
                <Header></Header>
                <main className={styles.pageMainWithSpinner}>
                    <Urls></Urls>
                    <MoonLoader
                    color="#0338bc"
                    cssOverride={{}}
                    loading
                    size={40}
                    speedMultiplier={1}
                    />
                </main>
            </div>
        )
    }
    return (
        <div className = {styles.bodyPage}>
            <Header></Header>
            <main className={styles.pageMain}>
                <Urls></Urls>
                <PostList></PostList>
            </main>
            <Modal>
                <CreatePostForm></CreatePostForm>
            </Modal>
        </div>
    )
}   