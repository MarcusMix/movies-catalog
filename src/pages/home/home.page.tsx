//hooks
import { useState, useContext } from "react"
import useMovies from "../../hooks/useMovies"

//framer motion
import { AnimatePresence } from "framer-motion"

//icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

//skeleton loading
import { SkeletonTheme } from "react-loading-skeleton"

//context
import { MovieContext } from "../../store/movie.context"

//components
import Search from '../../components/Search/search.component';
import { ButtonPages } from "../../components/Button/button.styles"
import Container from "../../components/Container/container.component"
import Filter from "../../components/Filter/filter.component"
import Movie from "../../components/Movies/movies.component"
import SkeletonCard from "../../components/Skeleton/skeleton.component"

//styles
import { Movies } from "../../components/Movies/movies.styles"
import { CountPage } from "../../components/Navbar/navbar.styles"
import { SLink, WrapperInside } from "../searched-movie/searched-movie.styles"
import { SpanClick } from './home.styles'


const Home = () => {

  //hook fetch movies, filter and loading
  const { movies, filtered, isLoading, setFiltered } = useMovies()

  //state
  const [activeGenre, setActiveGenre] = useState<number>(0)

  //context
  const { moreMovies, setMoreMovies } = useContext(MovieContext)

  //loading more pages
  const handleMoreMovies = () => {
    setMoreMovies(moreMovies + 1)
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  }

   //loading minus pages
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
    <>
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
                    <a href="#topo">
                        <SLink to={'/movie-details/' + movie.id}>
                        <Movie key={movie.id} movie={movie}/> 
                        </SLink>
                    </a>
                  )
                })}
              </AnimatePresence>
          </Movies>
          <CountPage>
            <WrapperInside>
              <SpanClick 
                onClick={handleBackMovies}
              >
              <MdKeyboardArrowLeft/>
              </SpanClick>
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
              <SpanClick 
                onClick={handleMoreMovies}
              >
                <MdKeyboardArrowRight/>
              </SpanClick>
            </WrapperInside>
          </CountPage>
        </Container>
    </>
  );
}

export default Home;