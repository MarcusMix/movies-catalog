//hooks
import { FC, createContext, useState } from "react";

//interface
import MovieProps from "../components/types/movie.types";

export const MovieContext = createContext<number | any>(1)

const MovieProvider:FC<MovieProps> = ({ children }) => {

    const [moreMovies, setMoreMovies] = useState<number | any>(1)

    return (
        <MovieContext.Provider 
            value={{moreMovies, setMoreMovies}}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider