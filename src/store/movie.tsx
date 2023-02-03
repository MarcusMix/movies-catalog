import { FC, createContext, useState, ReactNode } from "react";

export const MovieContext = createContext<number | any>(1)

interface MovieProps {
    children?: ReactNode 
}

const MovieProvider:FC<MovieProps> = ({ children}) => {

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