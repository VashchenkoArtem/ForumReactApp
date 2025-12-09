import { Urls } from "../urls/urls";
import { IMainProps } from "./main.types";
import style from "./main.module.css"

export function Main(props: IMainProps){
    const { children } = props
    return (
        <main className={style.pageMain}>
            <Urls setFilteredPosts={props.setFilteredPosts}></Urls>
            { children }
        </main>
    )
}