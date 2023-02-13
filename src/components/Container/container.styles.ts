import styled from "styled-components"

export const ContainerStyled = styled.div `
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};
`