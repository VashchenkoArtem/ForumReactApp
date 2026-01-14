// import { useEffect, useState } from "react"
// import { ITag } from "../shared"
export {}
// export function useSpecificTags(tagIds: number[] | undefined) {
//     const [tags, setTags] = useState<ITag[]>([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         let isCancelled = false

//         async function getSpecificTags() {
//             if (!tagIds || tagIds.length === 0) {
//                 setTags([])
//                 return
//             }
//             setLoading(true)
//             setTags([])
//             try {
//                 for (const id of tagIds) {
//                     const response = await fetch(
//                         `http://127.0.0.1:8000/tags/${id}`
//                     )
//                     const tag = await response.json()
//                     if (!isCancelled) {
//                         setTags(prev => [...prev, tag])
//                     }
//                 }
//             } catch (error) {
//                 console.error(error)
//             } finally {
//                 if (!isCancelled) {
//                     setLoading(false)
//                 }
//             }
//         }
//         getSpecificTags
//         return () => {
//             isCancelled = true
//         }
//     }, [tagIds])

//     return { tags, loading }
// }
