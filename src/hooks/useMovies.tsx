//hooks
import { useEffect, useState, useContext } from "react"

//context
import { MovieContext } from "../store/movie.context"

//interfaces & types
import IMovies from "../types/movieprops.types"

const useMovies = () => {

    //states
    const [movies, setMovies] = useState<IMovies[]>([])
    const [filtered, setFiltered] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    //context
    const { moreMovies } = useContext(MovieContext)

    //fetch api movie 
    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=28afe478b55e8d021dab50bce0e3ce05&language=pt-BR&page=${moreMovies}`)
            const dataMovies = await response.json()
            setMovies(dataMovies.results)
            setFiltered(dataMovies.results)
            setIsLoading(false)
        } catch(error) {
            console.log(error)
        }
    }

    //effect works when moreMovies change
    useEffect(() => {
        fetchMovies()
    }, [moreMovies])

    return { movies, filtered, isLoading, setFiltered }
}

export default useMovies