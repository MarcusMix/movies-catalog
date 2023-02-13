//styles
import { FooterContent, FooterStyled } from "./footer.styles"

//interface
import FooterProps from "../../types/footer.types"

//react
import { FC } from "react"

const Footer:FC<FooterProps> = ({ children }) => {
    return (
        <FooterStyled>
            <FooterContent>
                {children}
            </FooterContent>
        </FooterStyled>
    )
}

export default Footer