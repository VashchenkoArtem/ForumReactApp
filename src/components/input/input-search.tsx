import { useContext } from "react";
import { PostContext } from "../../context/post-context";
import style from "./input.module.css"
import { TranslationContext } from "../../context/lozalization-context";


export function InputSearch(){
    const context = useContext(PostContext)
    const translationContext = useContext(TranslationContext)
    if (!translationContext) return null
    const translate = translationContext.translate
    return  <div className = {style.hatInputContainer}>
                <input 
                type="text" 
                className = {style.inputSearch} 
                placeholder={translate("searchPostButton")}
                name = "search" 
                value = {context?.inputData}
                onChange = {(event)=>{
                    const input = event.target.value;
                    context?.setInputData(input)
                }}/>
            </div>
}