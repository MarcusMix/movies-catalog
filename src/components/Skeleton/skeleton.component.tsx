import { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'
import { SkeletonStyled } from './skeleton'

const SkeletonCard:FunctionComponent = () => {
  return (
    <SkeletonStyled>
        <Skeleton count={1} width={160}/>      
        <Skeleton width={220} height={280}/>
    </SkeletonStyled>
  )
}

export default SkeletonCard