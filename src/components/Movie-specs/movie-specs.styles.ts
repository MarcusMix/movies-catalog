import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    & a {
        text-decoration: none;
    }
`

export const MovieDisplay = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 30%;

    & h1 {
        margin: auto;
        padding: 1rem;
        text-align: center;
    }

    & h3 {
        text-align: flex-start;
        padding: 0;
        margin: 5px;
    }

    & img {
        width: 250px;
        height: 100%;
        margin: auto;
    }

    & svg {
        vertical-align: -10%;
    }
`

export const WrapperInside = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
        padding: 0 1.5rem;
        cursor: pointer;
        text-decoration: underline;
    }

    & svg {
        vertical-align: -10%;
    }
`