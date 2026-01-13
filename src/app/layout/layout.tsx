import styles from "./layout.module.css"
import { Header } from "../header/header"
import { Urls } from "../urls/urls"
import { useEffect, useState } from "react"
import { IPost } from "../../shared/types"
import { usePosts } from "../../hooks/use-posts"
import { MoonLoader } from "react-spinners"
import { PostList } from "../../components/postList"
import { Modal } from "../../shared/"
import { useTags } from "../../hooks/use-tags"


export function Layout(){
    const [loading, setLoading] = useState<boolean>()
    const { tags } = useTags()
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
                <div className = {styles.modal}>
                    <h1 className = {styles.modalTitle}>Створення публікації</h1>
                    <div className = {styles.inputs}>
                        <div className = {styles.inputContainer}>
                            <h1 className = {styles.inputTitle}>Назва публікації</h1>
                            <input className = {`${styles.input} ${styles.inputEnterTitle}`} type="text"/>
                        </div>
                        <div>
                            <h1 className = {styles.inputTitle}>Текст публікації</h1>
                            <textarea className = {`${styles.input} ${styles.inputEnterText}`}/>
                        </div>
                        <div>
                            <h1 className = {styles.inputTitle}>Теги</h1>
                            <div className={styles.tags}>
                                { tags.map((tag) => {
                                    return (
                                    <label key = {tag.id} className={styles.checkTag}>
                                        <input
                                        className = {`${styles.input} ${styles.inputEnterTag}`}
                                        type="checkbox" 
                                        name = "tag" 
                                        id = {"tag" + tag.id} 
                                        value={tag.name} />
                                        <h1 className = {styles.tagName}>{tag.name}</h1>
                                    </label>)
                                })}
                            </div>
                            <button className={styles.tagName}>Додати новий тег</button>
                        </div>
                        <div>
                            <input type="file" hidden id = "inputFile"/>
                            <label htmlFor="inputFile" className = {styles.addPhoto}>
                                <h1 className = {styles.plusPhoto}>+</h1>
                            </label>
                        </div>
                    </div>
                    <div className = {styles.buttonContainer}>
                        <button className = {styles.button}>Створити</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}   