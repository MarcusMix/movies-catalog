import styled from "styled-components";

export const FormStyled = styled.form `

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    & input {
        margin-top: 1rem;
        font-family: 'Manrope', sans-serif;
        border: none;
        background-color: #051923;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 200px;
    }
    
    & svg {
        background: red;
       position: fixed;
       left: 40%;
       color: red;
    }
`