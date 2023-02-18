import styled, { keyframes } from "styled-components"

const skeletonAnimation = keyframes`
    0% {
        background-color: #c0c3c5;
    }
    100% {
        background-color: #f1f1f1;
    }
`

export const RotateLoaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0;
`

export const WrapperSkeleton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
`

export const SkeletonStyled = styled.div `
    width: 400px;
    height: 600px;
    background-color: ${props => props.theme.lightGray};
    margin: 0 1rem;
    border-radius: 1rem;
    animation: ${skeletonAnimation} 1s linear infinite alternate;

    @media(max-width: 768px) {
        width: 260px;
        height: 400px;
        overflow: hidden;
        margin: 0 1rem;
    }
`

export const SkeletonText = styled.div`
    background-color: ${props => props.theme.lightGray};
    width: 70%;
    height: 15px;
    border-radius: 0.5rem;
    margin: 1rem;
    align-self: flex-start;
    animation: ${skeletonAnimation} 1s linear infinite alternate;
`