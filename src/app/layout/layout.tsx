import styles from "./layout.module.css"
import { Header } from "../header/header"
import { Urls } from "../urls/urls"
import { useRef, useState } from "react"
import { MoonLoader } from "react-spinners"
import { PostList } from "../../components/postList"
import { Modal } from "../../shared/"
import { CreatePostForm } from "../../components/create-post"

export function Layout(){
    const [loading, setLoading] = useState<boolean>()
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const closeModal = () => setModalOpen(false)
    function handleInputFocus(){
        setModalOpen(!isModalOpen)
    }
    const modalContainerRef = useRef<HTMLDivElement>(null);
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
                    <main className={styles.pageMain}>
                        <Urls setModalOpen={handleInputFocus}></Urls>
                        <PostList></PostList>
                    </main>
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