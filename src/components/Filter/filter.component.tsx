import { Dispatch, SetStateAction, useEffect } from 'react'
import { FC } from "react"

import { ButtonFiltered, FilterContainer } from './filter.styles'

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
            <ButtonFiltered 
                className={activeGenre ===  0 ? 'active' : ''} 
                onClick={() => setActiveGenre(0)}
                >All
            </ButtonFiltered>

            <ButtonFiltered 
                className={activeGenre === 35 ? 'active' : ''} 
                onClick={() => setActiveGenre(35)}
                >Comedy
            </ButtonFiltered>

            <ButtonFiltered 
                className={activeGenre === 28 ? 'active' : ''} 
                onClick={() => setActiveGenre(28)}
                >Action
            </ButtonFiltered>
        </FilterContainer>
    )
}

export default Filter