
import { RotatingSquare } from 'react-loader-spinner'
import { RotateLoaderStyled, SkeletonStyled, SkeletonText, WrapperSkeleton } from './skeleton-loading.styles'

const SkeletonLoading = () => {
  return (
    <RotateLoaderStyled>

      <WrapperSkeleton>
        <SkeletonText/>
          <SkeletonStyled/> 
      </WrapperSkeleton>

      
      <WrapperSkeleton>
        <SkeletonText/>
          <SkeletonStyled/> 
      </WrapperSkeleton>

      
      <WrapperSkeleton>
        <SkeletonText/>
          <SkeletonStyled/> 
      </WrapperSkeleton>
      
    </RotateLoaderStyled>
  )
}

export default SkeletonLoading
