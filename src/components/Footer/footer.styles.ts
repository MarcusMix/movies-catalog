import styled from "styled-components";

export const FooterStyled = styled.footer `
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.border};
    background-image: linear-gradient(to top, #ffc914, #f9d20c, #f3da07, #ebe309, #e3eb12);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterContent = styled.div `
    text-align: center;
    color: ${props => props.theme.fontColor};

    & svg {
        vertical-align: -10%;
        color: ${props => props.theme.red};
        margin: 0 0.4rem;
    }
`