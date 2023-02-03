import { Dispatch, SetStateAction, useEffect } from 'react'
import { FC } from "react"
import { ButtonClick } from '../Button/button.styles'

import { FilterContainer } from './filter.styles'

interface FilterProps {
    movies: any
    setFiltered: Dispatch<SetStateAction<string[]>>
    setActiveGenre: Dispatch<SetStateAction<number>>
    activeGenre: number
}

const Filter:FC<FilterProps> = ({movies, setFiltered, setActiveGenre, activeGenre}) => {

    // toda vez q o clicamos no botão, esse useEffect se ativará
    useEffect(() => {
        if(activeGenre === 0) {
            setFiltered(movies)
            return
        }
        const filtered = movies.filter((movie: any) => 
            movie.genre_ids.includes(activeGenre)
        )
        setFiltered(filtered)
    },[activeGenre])

    return (
        <FilterContainer>
            <ButtonClick 
                draggable={activeGenre === 0 ? true : false}
                onClick={() => setActiveGenre(0)}>
                Todos
            </ButtonClick>
           

            <ButtonClick 
                draggable={activeGenre === 35 ? true : false}
                onClick={() => setActiveGenre(35)}
                >Comédia
            </ButtonClick>

            <ButtonClick 
                draggable={activeGenre === 28 ? true : false}
                onClick={() => setActiveGenre(28)}
                >Ação
            </ButtonClick>
        </FilterContainer>
    )
}

export default Filter