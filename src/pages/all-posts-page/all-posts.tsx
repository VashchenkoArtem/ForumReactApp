import { useOutletContext } from "react-router-dom";
import { Filter } from "../../components/filter/filter";
import { IProps } from "../../components/filter/filter.types";

export function AllPosts(){
    const { setFilteredPosts, tags} = useOutletContext<IProps>()
    return (
        <Filter setFilteredPosts={setFilteredPosts} tags = {tags}></Filter>
    )
}