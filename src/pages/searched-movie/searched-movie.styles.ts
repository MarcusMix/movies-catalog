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

    @media (max-width: 768px) {
        /* margin: 0 5%; */
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
        padding: 0;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
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
    margin: 3rem 0;
`

//delirio kkkk
export const ImageNotFound = styled.div`
    width: 400px;
    height: 590px;
    margin: auto;
    background-color: ${props => props.theme.border};
    border-radius: 1rem;
    margin-top: 5px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & h2 {
        color: ${props => props.theme.red};
        align-self: center;
        margin-left: 20%;
    }

    & svg {
        width: 300px;
    }

    @media (max-width: 768px) {
         width: 100%;
         height: 100%;
         margin: auto;
         padding: 0;
         margin-right: 0.3rem;

        & h2 {
            margin: auto;
            padding: 1rem;
            text-align: center;
            font-size: 15px;
        }        
    }
`