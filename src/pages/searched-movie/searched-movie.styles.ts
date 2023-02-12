import styled from "styled-components";

//router
import { Link } from "react-router-dom";

//splider
import { SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

export const Wrapper = styled.div`
    margin: 0 10%;
    & a {
        text-decoration: none;
    }
`

export const Card = styled(SplideSlide)`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    & h2 {
        margin: auto;
        padding: 1rem;
        text-align: center;
        font-size: 20px;
    }

    & img {
        width: 400px;
        height: 600px;
        margin: auto;
    }

    @media (max-width: 768px) {

        img {
            width: 100%;
            height: 100%;
        }

        & h2 {
        margin: auto;
        padding: 1rem;
        text-align: center;
        font-size: 15px;
        }
    }
`

export const SLink = styled(Link) `
  text-decoration: none;
  color: #313131;
`

export const WrapperInside = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
`