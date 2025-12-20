import { InputSearch } from "../input"
import style from "./header.module.css"
import { IInputProps } from "../../shared/types"

  
export function HeaderWithInput(props: IInputProps){
    const { inputData, setInputData} = props
    return (
        <header className = {style.pageHat}>
            <div className = {style.logoContainer}>
                <h1 className = {style.hatLogo}>LOGO</h1>
            </div>
            <InputSearch inputData = {inputData} setInputData={setInputData}></InputSearch>
            <div className = {style.hatProfile}>
                <h1 className = {style.enterToAccount}>Увійти</h1>
            </div>
        </header>
    )
}