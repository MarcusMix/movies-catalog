//react
import { useEffect, FC } from 'react'

//styles
import { ButtonClick } from '../Button/button.styles'
import { FilterContainer } from './filter.styles'

//interface
import FilterProps from '../../types/filter.types'

const Filter:FC<FilterProps> = ({ movies, setFiltered, setActiveGenre, activeGenre }) => {

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
            <div>
            <ButtonClick
                whileTap={{ scale: 0.9 }}
                draggable={activeGenre === 0 ? true : false}
                onClick={() => setActiveGenre(0)}>
                Todos
            </ButtonClick>

            <ButtonClick 
                whileTap={{ scale: 0.9 }}
                draggable={activeGenre === 35 ? true : false}
                onClick={() => setActiveGenre(35)}
                >Comédia
            </ButtonClick>

            <ButtonClick 
                whileTap={{ scale: 0.9 }}
                draggable={activeGenre === 28 ? true : false}
                onClick={() => setActiveGenre(28)}
                >Ação
            </ButtonClick>

            <ButtonClick 
                whileTap={{ scale: 0.9 }}
                draggable={activeGenre === 12 ? true : false}
                onClick={() => setActiveGenre(12)}
                >Aventura
            </ButtonClick>

            <ButtonClick 
                whileTap={{ scale: 0.9 }}
                draggable={activeGenre === 27 ? true : false}
                onClick={() => setActiveGenre(27)}
                >Terror
            </ButtonClick>

            <ButtonClick 
                whileTap={{ scale: 0.9 }}
                draggable={activeGenre === 18 ? true : false}
                onClick={() => setActiveGenre(18)}
                >Drama
            </ButtonClick>

            </div>

        </FilterContainer>
    )
}

export default Filter