import styled from "styled-components";

export const FooterStyled = styled.footer `
    width: 100%;
    background-color: ${props => props.theme.border};
    background-image: linear-gradient(to top, #ffc914, #f9d20c, #f3da07, #ebe309, #e3eb12);
`

export const FooterContent = styled.div `
    text-align: center;
    color: ${props => props.theme.fontColor};
    `

export const FooterRow = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    align-self: center;

    hr {
        width: 80vw;
    }
    `

export const FooterColumn = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    
    a {
        text-decoration: none;
        color: ${props => props.theme.fontColor};
        cursor: pointer;
    }
    `

export const FooterBottom = styled.div`
    padding: 1rem;
    font-weight: 700;  
    
    a {
        text-decoration: none;
        color: ${props => props.theme.fontColor};
        cursor: pointer;
    }
`