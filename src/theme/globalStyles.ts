import { createGlobalStyle } from "styled-components";

interface Props {
    theme: {
        body: string
    }
}

export const GlobalStyles = createGlobalStyle<Props>`
    body {
        background-color: ${(props) => props.theme.body};
    }
`