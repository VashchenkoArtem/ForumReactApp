import { createContext, ReactNode, useState } from "react"
import { translation } from "../locales/translations" 

interface ITranslationContext{
    locale: string
    setLocaleTranslation: (locale: string) => void
    translate: (key: string, replacements?: string) => string
}
type TranslationDictionary = {
    [key: string]: {
        [locale: string]: string
    }
}

export const TranslationContext = createContext<ITranslationContext | null>(null)

interface ITranslationContextProviderProps{
    children: ReactNode
}
const translationDictionary = translation as TranslationDictionary

export function TranslationContextProvider(props: ITranslationContextProviderProps){
    const { children } = props
    const [ locale, setLocale ] = useState<string>("ua")
    function setLocaleTranslation(locale: string){
        setLocale(locale)
    }
    function translate(key: string, replacements?:string){  
        const result = translationDictionary[key][locale]
        return result
    }
    return <TranslationContext value = {{locale, setLocaleTranslation, translate}}>
            {children}
        </TranslationContext>
}