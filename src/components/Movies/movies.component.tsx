//react
import { FC } from "react"

//framer motion
import { motion } from 'framer-motion'

//interface
import MovieProps from "../../types/movies.types"

//image
import ImageNotFoundPng from '../../assets/imageNotFound.jpg'

const Movie:FC<MovieProps>  = ({ movie })=> {
    return (
        <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
        > 
            <h2>{movie.title}</h2>
            {movie.poster_path ? (
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                />
            ) : (
                <img src={ImageNotFoundPng} alt="Imagem não encontrada!"/>
            )}
        </motion.div>
    )
}

export default Movie