import { useEffect, useState } from "react";
import { IProps } from "./input.types";
import style from "./input.module.css"


export const postsList = [
    {
        id: 0,
        title: "First Post",
        description: "My first post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }],
        likes: 0
    },
    {
        id: 1,
        title: "Second Post",
        description: "My second post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }],
        likes: 1
    },
    {
        id: 2,
        title: "Third Post",
        description: "My third post",
        image: "image.png",
        userId: 2,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }],
        likes: 70
    },
    {
        id: 3,
        title: "Forth Post",
        description: "My forth post",
        image: "image.png",
        userId: 4,
        tags: [{
            id: 0,
            name: "#перший_пост"
        }],
        likes: 120
    }
]


export function InputSearch(props: IProps){
    const { filteredPosts, setFilteredPosts } = props
    const [ inputData, setInputData] = useState<string>("")
    useEffect(() => {
        setFilteredPosts(
            postsList.filter((post) => {
                return post.title.includes(inputData)
            })
        )
        if (!inputData){
            setFilteredPosts(        [
    {
        id: 0,
        title: "First Post",
        description: "My first post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }],
        likes: 0
    },
    {
        id: 1,
        title: "Second Post",
        description: "My second post",
        image: "image.png",
        userId: 1,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }],
        likes: 30
    },
    {
        id: 2,
        title: "Third Post",
        description: "My third post",
        image: "image.png",
        userId: 2,
        tags: [{
            id: 0,
            name: "#перший_пост"
        },
        {
            id: 1,
            name: "#вітання"
        }],
        likes: 70
    },
    {
        id: 3,
        title: "Forth Post",
        description: "My forth post",
        image: "image.png",
        userId: 4,
        tags: [{
            id: 0,
            name: "#перший_пост"
        }],
        likes: 120
    }
])
        return;        
}
    }, [inputData])
    return  <div className = {style.hatInputContainer}>
                <input 
                type="text" 
                className = {style.inputSearch} 
                placeholder="Знайти пост" 
                name = "search" 
                value = {inputData}
                onChange = {(event)=>{
                    const input = event.target.value;
                    setInputData(input)
                }}/>
            </div>
}