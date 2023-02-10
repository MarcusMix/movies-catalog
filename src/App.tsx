//hooks
import { useState, useEffect, useContext } from 'react';

//components
import Movie from './components/Movies/movies.component';
import Filter from './components/Filter/filter.component';
import Navbar from './components/Navbar/navbar.component';

//styles
import { Movies, SLink } from './components/Movies/movies.styles'
import { CountPage, NavbarContent, TitleYellow } from './components/Navbar/navbar.styles';

//framer motion
import { AnimatePresence } from 'framer-motion'

//context
import { MovieContext } from './store/movie';
import { Link } from 'react-router-dom';


const App = () => {

  //state
  const [movies, setMovies] = useState<any[]>([]) // tipar da forma correta
  const [filtered, setFiltered] = useState<any[]>([])
  const [activeGenre, setActiveGenre] = useState<number>(0)

  //context
  const { moreMovies } = useContext(MovieContext)

  //effect
  useEffect(() => {
    fetchMovies()
  }, [moreMovies])
  

  //fetch api movie 
  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=28afe478b55e8d021dab50bce0e3ce05&language=pt-BR&page=${moreMovies}`)
      const dataMovies = await response.json()
      console.log(dataMovies.results)
      setMovies(dataMovies.results)
      setFiltered(dataMovies.results)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
         <Filter 
        movies={movies} 
        setFiltered={setFiltered} 
        activeGenre={activeGenre} 
        setActiveGenre={setActiveGenre}
      />
      <Movies
        layout
        className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return (
              <SLink to={'/movie-details/' + movie.id}>
                <Movie key={movie.id} movie={movie}/> 
              </SLink>
            )
          })}
          </AnimatePresence>
      </Movies>
      <CountPage>
        página atual {moreMovies}
      </CountPage>
    </div>
  );
}

export default App;
