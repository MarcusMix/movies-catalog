import { FC } from "react"
import { motion } from 'framer-motion'

interface MovieProps {
    movie: any
}

const Movie:FC<MovieProps>  = ({movie})=> {
    return (
        <motion.div 
          layout
          animate={{opacity: 1}} 
          initial={{opacity: 0}} 
          exit={{opacity: 0}}
        > 
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </motion.div>
    )
}

export default Movie