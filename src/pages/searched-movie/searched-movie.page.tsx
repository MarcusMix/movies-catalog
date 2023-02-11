import { useEffect, useState } from 'react'

//router
import { useParams } from 'react-router-dom'

//styles
import { Card, SLink, Wrapper } from './searched-movie.styles'

//splide
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const SearchedMovie = () => {

    const [searchMovie, setSearchMovie] = useState<any>([])

    let params = useParams()

    const fetchSearchMovie = async (movie: string) => {
        const response = await fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=28afe478b55e8d021dab50bce0e3ce05&language=pt-BR&query=${movie}&page=1&include_adult=false
        `)
        const dataSearch = await response.json()
        console.log(dataSearch.results)
        setSearchMovie(dataSearch.results)
    }

    useEffect(() => {
        fetchSearchMovie(params.movie!)
    }, [])

  return (
    <Wrapper>
        <Splide options={{
            perPage: 3, 
                breakpoints: {
                    768: {
                        perPage: 1,
                    },
                },
            arrows: true,
            pagination: true,
            drag: 'free',
            gap: '1rem'
        }}>

        {searchMovie.map((movie: any) => {
            return (
                <SplideSlide key={movie.id}  >
                    <Card key={movie.id}>
                        <SLink to={'/movie-details/' + movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                        </SLink>
                    </Card>
                </SplideSlide>
            )
        })}
        </Splide>
    </Wrapper>
  )
}

export default SearchedMovie