import styles from "./layout.module.css"
import { Header } from "../header/header"
import { Urls } from "../urls/urls"
import { useContext, useRef, useState } from "react"
import { MoonLoader } from "react-spinners"
import { PostList } from "../../components/postList"
import { Modal } from "../../shared/"
import { CreatePostForm } from "../../components/create-post"
import { Outlet } from "react-router-dom"
import { PostContext } from "../../context/postContext"

export function Layout(){
    const [loading, setLoading] = useState<boolean>()
    const modalContainerRef = useRef<HTMLDivElement>(null);
    const context  = useContext(PostContext)
    if (!context) return null
    const { handleInputFocus, isModalOpen, closeModal } = context
    if (loading){
        return (
            <div className = {styles.bodyPage}>
                <Header></Header>
                <main className={styles.pageMainWithSpinner}>
                    <Urls setModalOpen={handleInputFocus}></Urls>
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
        <div className = {styles.bodyWithModal}>
            <div className = {`${styles.bodyPage}`}>
                    <Header></Header>
                    <Outlet/>
            </div>
            <div className = {`${isModalOpen && styles.bluredBodyPage}`}></div>
            <Modal
                className = {`${styles.modal}`}
                isOpen = {isModalOpen}
                onClose={closeModal}
                doCloseOnOutsideClick = {true}  
                container={
                    modalContainerRef.current ? modalContainerRef.current : undefined
                }>
                <CreatePostForm></CreatePostForm>
            </Modal>
        </div>
    )
}   