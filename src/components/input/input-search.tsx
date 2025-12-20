import { IInputProps } from "../../shared/types";
import style from "./input.module.css"


export function InputSearch(props: IInputProps){
    const { inputData, setInputData } = props

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