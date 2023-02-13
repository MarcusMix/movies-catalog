//styles
import { NavbarContainer } from "./navbar.styles"

//react
import {  FC } from 'react'

//interface
import NavbarProps from "../../types/navbar.types"


const Navbar:FC<NavbarProps> = ({children}) => {
    return (
        <NavbarContainer>
            {children}
        </NavbarContainer>
    )
}

export default Navbar