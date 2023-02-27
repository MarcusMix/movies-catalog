import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode
    onClick?: (e?: any) => void | any;
    color?: string 
    whileTap?: any
    whileHover?: any
}

export default ButtonProps