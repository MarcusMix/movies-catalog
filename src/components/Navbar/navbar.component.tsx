import { NavbarContainer } from "./navbar.styles"
import {ReactNode, FC} from 'react'

interface NavbarProps {
    children: ReactNode
}

const Navbar:FC<NavbarProps> = ({children}) => {
    return (
        <NavbarContainer>
            {children}
        </NavbarContainer>
    )
}

export default Navbar