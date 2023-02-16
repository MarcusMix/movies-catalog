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
            <SkeletonTheme baseColor="#b9b9b9" highlightColor="#9e9e9e">

            
            <h1>{movieDetails.title || <Skeleton/>}</h1> 

            {<img src={imageURL + movieDetails.backdrop_path} alt={movieDetails.title} /> 
            || 
            <div><Skeleton style={{maxWidth: '600px', minWidth: '200px'}}/></div>}

            {<h3> <BsCalendarCheckFill color='#09BC8A'/> Lançamento: {movieDetails.release_date}</h3> || <Skeleton/>}
            {<h3> <BsFillHeartFill color='#CC0000'/> Nota: {movieDetails.vote_average}</h3> || <Skeleton/>}
            {<h3> <BiTime /> Duração: {movieDetails.runtime} minutos</h3> || <Skeleton/>}
            {<h3> <FaTheaterMasks color='#1B98E0'/> Gêneros</h3> || <Skeleton/> }
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
            {<p>{movieDetails.overview}</p> || <Skeleton count={5}/>}
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