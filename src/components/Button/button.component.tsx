import { ButtonClick } from "./button.styles"
import { FC, ReactNode, ButtonHTMLAttributes } from 'react'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    onClick: (e?: any) => void | any;
}

const Button:FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <ButtonClick  onClick={onClick}>
            {children}
        </ButtonClick>
    )
}

export default Button