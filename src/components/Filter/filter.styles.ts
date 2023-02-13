import styled from "styled-components";

export const FilterContainer = styled.div `
    display: flex;
    justify-content: space-around;
    margin: 0 20px;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.background};
    animation: all 0.25s ease;

    & div {
        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center;
            flex-wrap: wrap;
        }
    } 
`