import { Dispatch, SetStateAction } from "react"

interface FilterProps {
    movies: any
    setFiltered: Dispatch<SetStateAction<string[]>>
    setActiveGenre: Dispatch<SetStateAction<number>>
    activeGenre: number
}

export default FilterProps