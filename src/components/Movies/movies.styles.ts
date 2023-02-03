import styled from "styled-components";
import { motion } from 'framer-motion'

export const Movies = styled(motion.div)`
  margin: 0 20%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  font-size: 10px;
`