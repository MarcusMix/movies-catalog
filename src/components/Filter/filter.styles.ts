import styled from "styled-components";

export const FilterContainer = styled.div `
    display: flex;
    justify-content: space-around;
    margin: 0 20px;
    flex-wrap: wrap;

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