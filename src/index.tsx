//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//css
import './index.css';

//context
import MovieProvider from './store/movie.context';

//router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//pages
import MovieDetails from './pages/movie-details/movie-details.page';
import SearchedMovie from './pages/searched-movie/searched-movie.page';
import Home from './pages/home/home.page';

//components
import Navbar from './components/Navbar/navbar.component';
import Footer from './components/Footer/footer.component';

//styles
import { SLink } from './components/Movies/movies.styles';
import { NavbarContent, TitleYellow } from './components/Navbar/navbar.styles';

//themes
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme/theme';
import { GlobalStyles } from './theme/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
        <BrowserRouter>
          <MovieProvider>
            <Navbar> 
            <NavbarContent>
              <SLink to={'/'}>
                <TitleYellow>
                  movies catalog
                </TitleYellow>
              </SLink>
            </NavbarContent>
            </Navbar>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/movie-details/:name' element={<MovieDetails/>}/>
              <Route path='/searched/:movie' element={<SearchedMovie/>}/>
            </Routes>
            <Footer/>
          </MovieProvider>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
