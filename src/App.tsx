//hooks
import { useState, useEffect, useContext } from 'react';

//components
import Movie from './components/Movies/movies.component';
import Filter from './components/Filter/filter.component';
import Search from './components/Search/search.component';

//styles
import { Movies, SLink } from './components/Movies/movies.styles'
import { CountPage } from './components/Navbar/navbar.styles';

//framer motion
import { AnimatePresence } from 'framer-motion'

//context
import { MovieContext } from './store/movie';

import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'
import { WrapperInside } from './components/Movie-specs/movie-specs.styles';


const App = () => {

  //state
  const [movies, setMovies] = useState<any[]>([]) // tipar da forma correta
  const [filtered, setFiltered] = useState<any[]>([])
  const [activeGenre, setActiveGenre] = useState<number>(0)

  //context
  const { moreMovies, setMoreMovies } = useContext(MovieContext)

  //effect
  useEffect(() => {
    fetchMovies()
  }, [moreMovies])
  

  //fetch api movie 
  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=28afe478b55e8d021dab50bce0e3ce05&language=pt-BR&page=${moreMovies}`)
      const dataMovies = await response.json()
      setMovies(dataMovies.results)
      setFiltered(dataMovies.results)
    } catch(error) {
      console.log(error)
    }
  }

  const handleMoreMovies = () => {
    setMoreMovies(moreMovies + 1)
}

const handleBackMovies = () => {
    if(moreMovies === 1) {
        return setMoreMovies(moreMovies)
    }
    setMoreMovies(moreMovies - 1)
}

  return (
    <div className="App">
      <Search/>
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
        Páginação
        <WrapperInside>
          <span onClick={handleBackMovies}>
          <HiArrowCircleLeft/>
          </span>
          {moreMovies > 1 && (
            <span 
                onClick={handleBackMovies}
                >
                    {moreMovies - 1 === 0 ? moreMovies : moreMovies -1}
                    
            </span>
          )}
          <span style={{color: '#a81925'}}>
            {moreMovies}
          </span>
          <span 
              onClick={handleMoreMovies}
              >
                {moreMovies + 1}
                  
          </span>
          <span onClick={handleMoreMovies}>
            <HiArrowCircleRight/>
          </span>
        </WrapperInside>
      </CountPage>
    </div>
  );
}

export default App;
