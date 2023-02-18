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
import { BiTime } from 'react-icons/bi'

//components
import Button from '../Button/button.component'

//skeleton loading
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';

const MovieSpecs = () => {

    const imageURL = 'https://image.tmdb.org/t/p/w500'
    
    let params = useParams<string>()

    const navigate = useNavigate()

    const [movieDetails, setMovieDetails] = useState<any>('')
    const [loading, setLoading] = useState(true)

    const fetchMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${params.name}?api_key=28afe478b55e8d021dab50bce0e3ce05&&language=pt-BR`
        )
        const data = await response.json()
        console.log(data)
        setMovieDetails(data)
        setLoading(false)
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
            <SkeletonTheme baseColor="#b9b9b9" highlightColor="#9e9e9e">

            {loading ? <Skeleton count={1} style={{width: '300px', marginTop: '1rem'}} /> : (
                <h1>{movieDetails.title}</h1> 
            ) }
            
            {loading ? <Skeleton height={300} count={1} style={{width: '500px', marginTop: '1rem'}} /> : (
                <img src={imageURL + movieDetails.backdrop_path} alt={movieDetails.title}/> 
               
            )}

            {loading ? <Skeleton count={1} style={{width: '300px', marginTop: '1rem'}} /> : (
                <div>
                    <h3> <BsCalendarCheckFill color='#09BC8A'/> Lançamento: {movieDetails.release_date}</h3>
                    <h3> <BsFillHeartFill color='#CC0000'/> Nota: {movieDetails.vote_average}</h3>
                    <h3> <BiTime /> Duração: {movieDetails.runtime} minutos</h3> 
                    <h3> <FaTheaterMasks color='#1B98E0'/> Gêneros</h3>
                </div>
            )}
            <div>
                <ul>
                    {movieDetails.genres?.map((type: any) => {
                        return (
                            <li key={movieDetails.id}>{type.name}</li>
                            )
                        })}
                </ul>
            </div>
            {loading ? <Skeleton count={8} style={{width: '500px', marginTop: '1rem'}} /> : (
                <h3> <RiFilePaper2Fill color='#F7CE5B'/> Sinópse</h3>
            )}
            <p>{movieDetails.overview}</p> 
            </SkeletonTheme>
            </MovieDisplay>
        </Wrapper>
        <WrapperInside>
            <Button 
                onClick={handleBackPage}
                whileTap={{ scale: 0.9 }} 
            > <RiArrowGoBackFill/> Voltar
            </Button>
        </WrapperInside>
    </>
  )
}

export default MovieSpecs