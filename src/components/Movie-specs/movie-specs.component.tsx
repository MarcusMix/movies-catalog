//hooks
import { useEffect, useState } from 'react'

//router
import { useParams, useNavigate } from 'react-router-dom'

//styles
import { Wrapper, MovieDisplay, WrapperInside } from './movie-specs.styles'

//icons
import { BsFillHeartFill, BsCalendarCheckFill } from 'react-icons/bs'
import { FaTheaterMasks } from 'react-icons/fa'
import { RiFilePaper2Fill, RiArrowGoBackFill } from 'react-icons/ri'

//components
import Button from '../Button/button.component'

const MovieSpecs = () => {
    
    let params = useParams<string>()

    const navigate = useNavigate()

    const [movieDetails, setMovieDetails] = useState<any>('')

    const fetchMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${params.name}?api_key=28afe478b55e8d021dab50bce0e3ce05&&language=pt-BR`
        )
        const data = await response.json()
        console.log(data)
        setMovieDetails(data)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const handleBackPage = () => {
        navigate('/')
    }

  return (
    <>
        <Wrapper>
            <MovieDisplay>
            <h1>{movieDetails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
            <h3> <BsCalendarCheckFill color='#09BC8A'/> Lançamento: {movieDetails.release_date}</h3>
            <h3> <BsFillHeartFill color='#CC0000'/> Nota: {movieDetails.vote_average}</h3>
            <h3> <FaTheaterMasks color='#1B98E0'/> Gêneros</h3>
            <div>
                <ul>
                    {movieDetails.genres?.map((type: any) => {
                        return (
                            <li key={movieDetails.id}>{type.name}</li>
                            )
                        })}
                </ul>
            </div>
            <h3> <RiFilePaper2Fill color='#F7CE5B'/> Sinópse</h3>
            <p>{movieDetails.overview}</p>
            </MovieDisplay>
        </Wrapper>
        <WrapperInside>
            <Button onClick={handleBackPage} > <RiArrowGoBackFill/> Voltar</Button>
        </WrapperInside>
    </>
  )
}

export default MovieSpecs