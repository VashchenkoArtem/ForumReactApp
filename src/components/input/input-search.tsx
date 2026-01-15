import { useContext } from "react";
import { PostContext } from "../../context/post-context";
import style from "./input.module.css"


export function InputSearch(){
    const context = useContext(PostContext)

    return  <div className = {style.hatInputContainer}>
                <input 
                type="text" 
                className = {style.inputSearch} 
                placeholder="Знайти пост" 
                name = "search" 
                value = {context?.inputData}
                onChange = {(event)=>{
                    const input = event.target.value;
                    context?.setInputData(input)
                }}/>
            </div>
}