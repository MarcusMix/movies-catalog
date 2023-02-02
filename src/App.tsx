import './App.css';

//hooks
import { useState, useEffect } from 'react';

//components
import Movie from './components/Movies/movies.component';
import Filter from './components/Filter/filter.component';

//styles
import { Movies } from './components/Movies/movies.styles'

//framer motion
import { AnimatePresence } from 'framer-motion'

function App() {

  const [movies, setMovies] = useState<any[]>([]) // tipar da forma correta
  const [filtered, setFiltered] = useState<any[]>([])
  const [activeGenre, setActiveGenre] = useState<number>(0)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=28afe478b55e8d021dab50bce0e3ce05&language=en-US&page=1")
    const dataMovies = await response.json()
    setMovies(dataMovies.results)
    setFiltered(dataMovies.results)
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
              return <Movie key={movie.id} movie={movie}/> 
            })}
          </AnimatePresence>
        </Movies>
    </div>
  );
}

export default App;
