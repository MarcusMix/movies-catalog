import { FC } from 'react'

//types
import ContainerProps from '../../types/container.types'

//styles
import { ContainerStyled } from './container.styles'

const Container:FC<ContainerProps> = ({ children }) => {
  return (
    <ContainerStyled>
        {children}
    </ContainerStyled>
  )
}

export default Container