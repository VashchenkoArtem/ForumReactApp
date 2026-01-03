import { useParams } from 'react-router-dom'
import { Header } from '../../app/header'
import { Urls } from '../../app/urls'
import { useProduct } from '../../hooks/use-product'
import style from './post-page.module.css'
import { PostCardWithComments } from '../../components/post-card-with-comments'

export function PostPage(){
    const { postId } = useParams()
    const {post, error} = useProduct(postId)
    if (!post){
        return (
            <div className = {style.bodyPage}>
                <Header></Header>
                <main className={style.pageMain}>
                    <Urls/>
                    <div>
                        <h1>Пост не знайдено</h1>
                    </div>
                </main>
            </div>       
        )
    }
    return (
        <div className = {style.bodyPage}>
            <Header></Header>
            <main className={style.pageMain}>
                <Urls/>
               <PostCardWithComments post = {post}/>
            </main>
        </div>
    )
}