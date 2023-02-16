import { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'
import { SkeletonStyled } from './skeleton'

const SkeletonCard:FunctionComponent = () => {
  return (
    <SkeletonStyled>
        <Skeleton count={1} width={140}/>      
        <Skeleton  height={280} style={{maxWidth: '400px', minWidth: '220px', maxHeight: '700px', minHeight: '260px', marginTop: '10px'}}/>
    </SkeletonStyled>
  )
}

export default SkeletonCard