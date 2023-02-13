//styles
import { ButtonClick } from "./button.styles"

//react
import { FC } from 'react'

//types
import ButtonProps from "../../types/button.types"

const Button:FC<ButtonProps> = ({ children, onClick, color }) => {
    return (
        <ButtonClick  onClick={onClick} color={color}>
            {children}
        </ButtonClick>
    )
}

export default Button