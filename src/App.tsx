//hooks
import { useState, useEffect, useContext } from 'react';

//components
import Movie from './components/Movies/movies.component';
import Filter from './components/Filter/filter.component';
import Search from './components/Search/search.component';
import Container from './components/Container/container.component'
import SkeletonCard from './components/Skeleton/skeleton.component';

//styles
import { Movies, SLink } from './components/Movies/movies.styles'
import { CountPage } from './components/Navbar/navbar.styles';

//framer motion
import { AnimatePresence } from 'framer-motion'

//context
import { MovieContext } from './store/movie';

//icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { WrapperInside } from './components/Movie-specs/movie-specs.styles';
import { ButtonPages } from './components/Button/button.styles';

//skeleton loading
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

//types & interfaces
import IMovies from './types/movieprops.types';

const App = () => {

  //state
  const [movies, setMovies] = useState<IMovies[]>([])
  const [filtered, setFiltered] = useState<any[]>([])
  const [activeGenre, setActiveGenre] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

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
      setIsLoading(false)
    } catch(error) {
      console.log(error)
    }
  }

  const handleMoreMovies = () => {
    setMoreMovies(moreMovies + 1)
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  }

  const handleBackMovies = () => {
      if(moreMovies === 1) {
          return setMoreMovies(moreMovies)
      }
      setMoreMovies(moreMovies - 1)
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  }

  return (
    <div className="App">
        <Container>
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
              {isLoading && (
                <SkeletonTheme baseColor="#b9b9b9" highlightColor="#9e9e9e">
                  {/* modo hard code kkkkk (procurando uma solução menos idiota) */}
                  <SkeletonCard/>
                  <SkeletonCard/>  
                  <SkeletonCard/>  
                  <SkeletonCard/>  
                  <SkeletonCard/>  
                  <SkeletonCard/>  
                  <SkeletonCard/>  
                  <SkeletonCard/>  
                  <SkeletonCard/>  
                </SkeletonTheme>
              )}
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
            <WrapperInside>
              <span 
                onClick={handleBackMovies}
              >
              <MdKeyboardArrowLeft/>
              </span>
              {moreMovies > 1 && (
                <ButtonPages 
                    onClick={handleBackMovies}
                    >
                        {moreMovies - 1 === 0 ? moreMovies : moreMovies -1}
                        
                </ButtonPages>
              )}
              <ButtonPages style={{background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,199,18,1) 0%, rgba(255,255,6,1) 100%)'}}>
                {moreMovies}
              </ButtonPages>
              <ButtonPages 
                  onClick={handleMoreMovies}
                  >
                    {moreMovies + 1}
                      
              </ButtonPages>
              <span 
                onClick={handleMoreMovies}
              >
                <MdKeyboardArrowRight/>
              </span>
            </WrapperInside>
          </CountPage>
        </Container>
    </div>
  );
}

export default App;