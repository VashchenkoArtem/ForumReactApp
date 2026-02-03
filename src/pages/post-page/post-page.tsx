import { useParams } from 'react-router-dom'
import { Header } from '../../app/header'
import { Urls } from '../../app/urls'
import { usePost } from '../../hooks/use-post'
import style from './post-page.module.css'
import { PostCardWithComments } from '../../components/post-card-with-comments'
import { useState } from 'react'

export function PostPage(){
    const { postId } = useParams()
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const {post, error} = usePost(Number(postId))
    function handleInputFocus(){
        setModalOpen(!isModalOpen)
    }
    if (!post){
        return (
            <div>
                <h1>{error}</h1>
                <h1>Пост не знайдено</h1>
            </div>    
        )
    }
    return (
        <main className={style.pageMain}>
            <Urls setModalOpen={handleInputFocus}></Urls>
            <PostCardWithComments post = {post}/>
        </main>
    )
}