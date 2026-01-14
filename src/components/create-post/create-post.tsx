import { useEffect, useState } from "react"
import { useTags } from "../../hooks/use-tags"
import styles from "./create-post.module.css"
import { IForm } from "../../shared"
import { useCreatePost } from "../../hooks/use-create-post"
import { useNavigate } from "react-router-dom"

export function CreatePostForm(){
    const { tags } = useTags()
    const [ formInputs, setFormInputs ] = useState<IForm>()
    const [ isSendedForm, setIsSendForm] = useState<boolean>(false)
    const [ selectedTags, setSelectedTags ] = useState<number[]>([])
    const { createPost } = useCreatePost()
    const navigate = useNavigate()
    return (
        <div className = {styles.modal}>
            <h1 className = {styles.modalTitle}>Створення публікації</h1>
            <div className = {styles.inputs}>
                <div className = {styles.inputContainer}>
                    <h1 className = {styles.inputTitle}>Назва публікації</h1>
                    <input className = {`${styles.input} ${styles.inputEnterTitle}`} 
                    onChange = {(event)=>{
                        const input = event.target.value
                        const newForm = { ...formInputs, title: input}
                        setFormInputs(newForm)                       
                    }} type="text"/>
                </div>
                <div>
                    <h1 className = {styles.inputTitle}>Текст публікації</h1>
                    <textarea className = {`${styles.input} ${styles.inputEnterText}`}
                    onChange = {(event)=>{
                        const input = event.target.value
                        const newForm = { ...formInputs, description: input}
                        setFormInputs(newForm)          
                    }}/>
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
                                id = {`${tag.id}`} 
                                value={tag.name}
                                onChange={(event) => {
                                    const id = Number(event.target.id)

                                    setSelectedTags(prev => {
                                        const updated = prev.includes(id)
                                            ? prev.filter(tagId => tagId !== id)
                                            : [...prev, id]

                                        setFormInputs(form => ({
                                            ...form!,
                                            tags: updated
                                        }))

                                        return updated
                                    })
                                }}
                     />
                                <h1 className = {styles.tagName}>{tag.name}</h1>
                            </label>)
                        })}
                    </div>
                    <button className={styles.tagName}>Додати новий тег</button>
                </div>
                <div>
                    <input type="file" hidden id = "inputFile" 
                    onChange = {(event)=>{
                        const input = event.target.value
                        const newForm = { ...formInputs, image: input}
                        setFormInputs(newForm)
                        console.log(formInputs)
                    }}/>
                    <label htmlFor="inputFile" className = {styles.addPhoto}>
                        <h1 className = {styles.plusPhoto}>+</h1>
                    </label>
                </div>
            </div>
            <div className = {styles.buttonContainer}>
                <button className = {styles.button} onClick={async()=>{
                    if (formInputs){
                        const {result} = await createPost(formInputs)
                        navigate(`/posts/${result.id}`)
                    }}}>Створити</button>
            </div>
        </div>
    )
}